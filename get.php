<?php
header('Content-Type: application/json');
require_once('../../config.php');
require_login();

if ($data = $DB->get_record('block_accessplus', array('userid' => $USER->id))) {
 echo(json_encode($data));
}