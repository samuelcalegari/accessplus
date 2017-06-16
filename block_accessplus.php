<?php
class block_accessplus extends block_base
{
    CONST JS = '/blocks/accessplus/js/main.js';

    public function init()
    {
        $this->title = get_string('accessplus', 'block_accessplus');
    }

    public function get_content() {

        global $CFG;

        if ($this->content !== null) {
            return $this->content;
        }

        $this->content         =  new stdClass;

        $content = '';

        $content .= html_writer::tag(
            'a',
            'A-',
            array(  'title' => get_string('btn_decrease', 'block_accessplus'),
                    'class' => 'btn',
                    'id' => "block_accessplus_decrease_font")
        );

        $content .= html_writer::tag(
            'a',
            'A+',
            array(  'title' => get_string('btn_increase', 'block_accessplus'),
                'class' => 'btn',
                'id' => "block_accessplus_increase_font")
        );

        $content .= html_writer::tag(
            'a',
            'R',
            array(  'title' => get_string('btn_reset', 'block_accessplus'),
                'class' => 'btn',
                'id' => "block_accessplus_reset")
        );

        $content .= html_writer::tag(
            'a',
            get_string('btn_save', 'block_accessplus'),
            array(  'title' => get_string('btn_save', 'block_accessplus'),
                'class' => 'acces_plus_keep',
                'id' => "block_accessplus_save_params")
        );

        $content .= html_writer::select(
            [
                'bw' => get_string('black-white', 'block_accessplus'),
                'wb' => get_string('white-black', 'block_accessplus'),
                'soviet' => get_string('soviet', 'block_accessplus')
            ],
            '_block_accessplus_theme_picker'
        );

        $content .= '<script type="text/javascript">const accesPlus = { mroot : "' . $CFG->wwwroot . '"}</script>';

        $this->content->text   = $content;
        $this->page->requires->jquery();
        $this->page->requires->js(self::JS, false);
        return $this->content;
    }

    public function instance_allow_multiple(){
        return false;
    }
}