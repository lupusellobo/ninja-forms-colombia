<?php if ( ! defined( 'ABSPATH' ) ) exit;

/*
 * Plugin Name: Ninja Forms - colombia
 * Plugin URI: http://www.laligad.com
 * Description: 
 * Version: 3.0.0
 * Author: German Hernandez
 * Author URI: http://www.laligad.com
 * Text Domain: ninja-forms-colombia----
 *
 * Copyright 2020 German Hernandez.
 */

if( version_compare( get_option( 'ninja_forms_version', '0.0.0' ), '3', '<' ) || get_option( 'ninja_forms_load_deprecated', FALSE ) ) {

    //include 'deprecated/ninja-forms-colombia----.php';

} else {

    /**
     * Class NF_Colombia
     */
    final class NF_Colombia
    {
        const VERSION = '0.0.1';
        const SLUG    = 'colombia';
        const NAME    = 'colombia';
        const AUTHOR  = 'German Hernandez';
        const PREFIX  = 'NF_Colombia';

        /**
         * @var NF_Colombia
         * @since 3.0
         */
        private static $instance;

        /**
         * Plugin Directory
         *
         * @since 3.0
         * @var string $dir
         */
        public static $dir = '';

        /**
         * Plugin URL
         *
         * @since 3.0
         * @var string $url
         */
        public static $url = '';

        /**
         * Main Plugin Instance
         *
         * Insures that only one instance of a plugin class exists in memory at any one
         * time. Also prevents needing to define globals all over the place.
         *
         * @since 3.0
         * @static
         * @static var array $instance
         * @return NF_Colombia Highlander Instance
         */
        public static function instance()
        {
            if (!isset(self::$instance) && !(self::$instance instanceof NF_Colombia)) {
                self::$instance = new NF_Colombia();

                self::$dir = plugin_dir_path(__FILE__);

                self::$url = plugin_dir_url(__FILE__);

                /*
                 * Register our autoloader
                 */
                spl_autoload_register(array(self::$instance, 'autoloader'));
            }
            
            return self::$instance;
        }

        public function __construct()
        {
            /*
             * Required for all Extensions.
             */
            add_action( 'admin_init', array( $this, 'setup_license') );

            /*
             * Optional. If your extension creates a new field interaction or display template...
             */
            add_filter( 'ninja_forms_register_fields', array($this, 'register_fields'));

            /*
             * Optional. If your extension processes or alters form submission data on a per form basis...
             */
            //add_filter( 'ninja_forms_register_actions', array($this, 'register_actions'));

            /*
             * Optional. If your extension collects a payment (ie Strip, PayPal, etc)...
             */
            //add_filter( 'ninja_forms_register_payment_gateways', array($this, 'register_payment_gateways'));
            add_filter( 'ninja_forms_field_template_file_paths', [ $this, 'register_template_path' ] );

            add_action( 'wp_enqueue_scripts', [ $this, 'load_plugin' ] );
        }

        /**
         * load external assets for custom fieldas and actions
         */
        public function load_plugin()
        {
            wp_enqueue_style( 'colombia-selector-css', self::$url . 'assets/css/colombia-selector.css', [] );

            wp_enqueue_script( 'cololomia-selector-js', self::$url . 'assets/js/colombia-selector.js', ['jquery'] );

        }

        /**
         * Optional. If your extension creates a new field interaction or display template...
         */
        public function register_fields($actions)
        {
            $actions[ 'colombia' ] = new NF_Colombia_Fields_ColombiaExample(); // includes/Fields/ColombiaExample.php

            return $actions;
        }

        /**
         * Optional. If your extension processes or alters form submission data on a per form basis...
         */
        public function register_actions($actions)
        {
            $actions[ 'colombia' ] = new NF_Colombia_Actions_ColombiaExample(); // includes/Actions/ColombiaExample.php

            return $actions;
        }

        /**
         * Optional. If your extension collects a payment (ie Strip, PayPal, etc)...
         */
        public function register_payment_gateways($payment_gateways)
        {
            $payment_gateways[ 'colombia' ] = new NF_Colombia_PaymentGateways_ColombiaExample(); // includes/PaymentGateways/ColombiaExample.php

            return $payment_gateways;
        }

        /*
         * Optional methods for convenience.
         */

        public function autoloader($class_name)
        {
            if (class_exists($class_name)) return;

            if ( false === strpos( $class_name, self::PREFIX ) ) return;

            $class_name = str_replace( self::PREFIX, '', $class_name );
            $classes_dir = realpath(plugin_dir_path(__FILE__)) . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR;
            $class_file = str_replace('_', DIRECTORY_SEPARATOR, $class_name) . '.php';

            if (file_exists($classes_dir . $class_file)) {
                require_once $classes_dir . $class_file;
            }
        }

        /**
         * Register the template path for the plugin
         *
         * @param array $file_paths
         *
         * @return array
         */
        public function register_template_path( $file_paths ) {
            $file_paths[] =  plugin_dir_path(__FILE__)  . 'includes/Templates/';

            return $file_paths;
        }

        /**
         * Template
         *
         * @param string $file_name
         * @param array $data
         */
        public static function template( $file_name = '', array $data = array() )
        {
            if( ! $file_name ) return;

            extract( $data );

            include self::$dir . 'includes/Templates/' . $file_name;
        }
        
        /**
         * Config
         *
         * @param $file_name
         * @return mixed
         */
        public static function config( $file_name )
        {
            return include self::$dir . 'includes/Config/' . $file_name . '.php';
        }

        /*
         * Required methods for all extension.
         */

        public function setup_license()
        {
            if ( ! class_exists( 'NF_Extension_Updater' ) ) return;

            new NF_Extension_Updater( self::NAME, self::VERSION, self::AUTHOR, __FILE__, self::SLUG );
        }
    }

    /**
     * The main function responsible for returning The Highlander Plugin
     * Instance to functions everywhere.
     *
     * Use this function like you would a global variable, except without needing
     * to declare the global.
     *
     * @since 3.0
     * @return {class} Highlander Instance
     */
    function NF_Colombia()
    {
        return NF_Colombia::instance();
    }

    NF_Colombia();
}
