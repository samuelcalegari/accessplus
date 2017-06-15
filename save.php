<?php
require_once('../../config.php');
require_login();

$theme = required_param('theme', PARAM_TEXT);
$fontsize = required_param('fontsize', PARAM_TEXT);

if ($data = $DB->get_record('block_accessplus', array('userid' => $USER->id))) {

    $data->fontsize = $fontsize;
    $data->theme = $theme;
    $DB->update_record('block_accessplus', $data);

} else {
    $data= new stdClass;

    $data->userid = $USER->id;
    $data->fontsize = $fontsize;
    $data->theme = $theme ;

    $DB->insert_record('block_accessplus', $data);
}

