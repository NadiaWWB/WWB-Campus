<?php

namespace Craft;

class Utility_ContactService extends BaseApplicationComponent
{
    public function sendContact($name, $emailAddress, $newsletter, $subject, $message)
    {

        // $body = "$subject.'\n\n'.$message;

        if($newsletter != NULL)
        {
            $this->subscribe($emailAddress);
            $newsletter = 'Yes';
        } else {
            $newsletter = 'No';
        }

        $body = "Name: $name<br />";
        $body .= "Email Address: $emailAddress<br />";
        $body .= "Subscribed to Newsletter: $newsletter<br />";
        $body .= "Subject: $subject<br />";
        $body .= "Message: $message";

        $email = new EmailModel();

        $email->toEmail = 'aaron.berkowitz@me.com';

        $email->subject = 'New Contact Form Submission';

        $email->body = $body;

        craft()->email->sendEmail($email);

    }

    public function subscribe($email) 
    {
        return;
    }
}