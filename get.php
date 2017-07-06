<?php
require_once('../../config.php');
if (isloggedin()) {

    header('Content-Type: application/json');
    if ($data = $DB->get_record('block_accessplus', array('userid' => $USER->id))) {
        echo(json_encode($data));
    }
}