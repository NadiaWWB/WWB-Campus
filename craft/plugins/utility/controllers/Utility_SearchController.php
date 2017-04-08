<?php
namespace Craft;

class Utility_SearchController extends BaseController
{
	protected $allowAnonymous = true;
    
    public function actionSearch()
    {
        $query = craft()->request->getParam('query');
		
		$criteria = craft()->elements->getCriteria(ElementType::Entry);

		$criteria->section = 'article';

		$criteria->search = "summary:$query introduction:$query";

		$results = $criteria->find();

		$this->returnJson(array_map(function($item){
			return $item->title;
		}, $results));
    }
}