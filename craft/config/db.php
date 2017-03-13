<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */




return array(
    'tablePrefix' => 'cftwb',
    'server' => $_SERVER['db_server'],
    'user' => $_SERVER['db_user'],
    'password' => $_SERVER['db_password'],
    'database' => $_SERVER['db_database'],
    'port' => 3306
);