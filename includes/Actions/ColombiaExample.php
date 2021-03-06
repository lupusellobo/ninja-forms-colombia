<?php if ( ! defined( 'ABSPATH' ) || ! class_exists( 'NF_Abstracts_Action' )) exit;

/**
 * Class NF_Action_ColombiaExample
 */
final class NF_Colombia_Actions_ColombiaExample extends NF_Abstracts_Action
{
    /**
     * @var string
     */
    protected $_name  = 'colombia';

    /**
     * @var array
     */
    protected $_tags = array();

    /**
     * @var string
     */
    protected $_timing = 'normal';

    /**
     * @var int
     */
    protected $_priority = '10';

    /**
     * Constructor
     */
    public function __construct()
{
    parent::__construct();

    $this->_nicename = __( 'colombia Example Action', 'ninja-forms' );
}

    /*
    * PUBLIC METHODS
    */

    public function save( $action_settings )
    {
    
    }

    public function process( $action_settings, $form_id, $data )
    {
        return $data;
    }
}
