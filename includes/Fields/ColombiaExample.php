<?php if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class NF_Field_ColombiaExample
 */
class NF_Colombia_Fields_ColombiaExample extends NF_Abstracts_Field
{
    protected $_name = 'colombia';
    protected $_type = 'colombia';
    protected $_nicename = 'Colombia selector';
    protected $_icon = 'map-o';
    protected $_parent_type = 'textbox';
    protected $_section = 'common';
    protected $_templates = 'colombia';

    protected $_settings_all_fields = array(
        'label',
        'key',
        'required',
        'manual_key',

    );

    public function __construct()
    {
        parent::__construct();

        $this->_nicename = __( 'Colombia Selector', 'ninja-forms' );
    }
}