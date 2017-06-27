<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
	'*' => array(
		'autoLoginAfterAccountActivation' => true,
		'activateAccountSuccessPath' => 'members/profile',
		'devMode' => true,
		'deferPublicRegistrationPassword' => true,
		'loginPath' => 'members/login',
		'useEmailAsUsername' => true,
		'setPasswordSuccessPath' => 'members/login'
	),
	'wwb-campus-dev.us-east-1.elasticbeanstalk.com' => array(
		'siteUrl' => 'http://wwb-campus-dev.us-east-1.elasticbeanstalk.com/',
		'devMode' => false
	),
	'wwb-campus-prod.us-east-1.elasticbeanstalk.com' => array(
		'siteUrl' => 'http://wwb-campus.org',
		'devMode' => false
	),
	'wwb-docker.localhost' => array(
		'siteUrl' => 'http://wwb-docker.localhost'
	),
	'wwb-campus.org' => array(
		'siteUrl' => 'http://wwb-campus.org/',
		'devMode' => false
	)
);
