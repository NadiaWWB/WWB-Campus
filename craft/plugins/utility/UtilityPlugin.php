<?php
namespace Craft;

class UtilityPlugin extends BasePlugin
{
    public function getName()
    {
        return 'WWB-Campus Utility Plugin';
    }

    public function getVersion()
    {
        return '1.0';
    }

    public function getDeveloper()
    {
        return 'Aaron Berkowitz';
    }

    public function getDeveloperUrl()
    {
        return 'github.com/aberkie';
    }

    public function init()
    {
        craft()->on('users.beforeSaveUser', function(Event $event) {
            $subscribe = $event->params['user']->newsletterSubscribe;
            $email = $event->params['user']->email;

            if($subscribe != NULL) 
            {
                craft()->mailchimpSubscribe->subscribe($email, '');
            }
        });
    }
}

