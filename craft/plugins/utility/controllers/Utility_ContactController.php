<?php
namespace Craft;

class Utility_ContactController extends BaseController
{
	protected $allowAnonymous = true;
    
    public function actionSubmit()
    {
        $captcha = craft()->request->getPost('g-recaptcha-response');
		
		$verified = craft()->recaptcha_verify->verify($captcha);

		$name = craft()->request->getPost('name');

		$email = craft()->request->getPost('email');

		$newsletter = craft()->request->getPost('newsletter');

		$subject = craft()->request->getPost('subject');

		$message = craft()->request->getPost('message');
		
		if($verified)
		{			
			$this->redirect('contact/thank-you');

		} else {
			craft()->urlManager->setRouteVariables(array(
				'name' => $name,
				'email' => $email,
				'subject' => $subject,
				'message' => $message,
				'error' => 'Sorry, an error occured when submitting your comment. Please try again.'
			));
		}
    }
}