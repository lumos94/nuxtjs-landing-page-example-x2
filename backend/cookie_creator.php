<?php
header("Access-Control-Allow-Origin: *");

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');    // cache for 1 day
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Requested-With');

$_POST = json_decode(file_get_contents("php://input"), true);
    if (!isset($_COOKIE['custom_cookie'])) {
      if (!empty($_POST))
        setcookie('marketing_vars', json_encode($_POST), time() + (86400 * 30), '/', 'URL_goes_here'); // 86400 = 1 day
    }

