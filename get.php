<?php
require_once('../../config.php');
require_login();

header('Content-Type: application/json');
if ($data = $DB->get_record('block_accessplus', array('userid' => $USER->id))) {
 echo(json_encode($data));
}