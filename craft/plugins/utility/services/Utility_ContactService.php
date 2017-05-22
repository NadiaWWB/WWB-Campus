<?php

namespace Craft;

class Utility_ContactService extends BaseApplicationComponent
{
    public function sendContact($name, $emailAddress, $newsletter, $subject, $message)
    {

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

        $email->toEmail = 'nadia@wordswithoutborders.org';

        $email->subject = 'New Contact Form Submission';

        $email->body = $body;

        craft()->email->sendEmail($email);

    }

    public function subscribe($email) 
    {
        $subscribe = craft()->mailchimpSubscribe->subscribe($email, '');
    }
}