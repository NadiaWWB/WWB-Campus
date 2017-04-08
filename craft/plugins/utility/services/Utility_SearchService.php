<?php

namespace Craft;

class Utility_SearchService extends BaseApplicationComponent
{

	public function search($query) 
	{
		$sections = array(
			'article', 
	    	'units',
	    	'unitThemes',
	    	'news',
	    	'teachingIdeas',
	    	'extras', 
	    	'contributors'
		);

		$results = array();

		foreach($sections as $section) {

			$criteria = craft()->elements->getCriteria(ElementType::Entry);

			$criteria->section = $section;

			$criteria->search = $query;

			$theseResults = $criteria->find();

			if($theseResults) 
			{
				$formatted = array_map(function($item){
					return array(
						'title' => $item->title,
						'url' => $item->url
					);
				}, $theseResults);

				$sectionObj = craft()->sections->getSectionByHandle($section);

				$results[] = array(
					'section' => $sectionObj->name,
					'sectionHandle' => $section,
					'entries' => $formatted
				);
			}
		}

		return $results;
		
	}

}