<?php

namespace Craft;

class UtilityVariable
{
	public function search($query)
	{
		$return = craft()->utility_search->search($query);
		
		return $return;
	}
	
}
