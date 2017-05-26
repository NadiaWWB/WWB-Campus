/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
  
  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;
  
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

$('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs').on
    (
      'click', 'li.tab-header-and-content > a', function(event) {

        if (!$(this).hasClass('is-active')) {
            
            event.preventDefault();
            var accordionTabs = $(this).closest('.accordion-tabs');
            accordionTabs.find('.is-open').removeClass('is-open').hide();

            $(this).next().toggleClass('is-open').toggle();
              accordionTabs.find('.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        
        } 
        else {
      event.preventDefault();
    }
  });

// $('.js-accordion-trigger').bind('click', function(e){
//   jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
//   jQuery(this).parent().toggleClass('is-expanded');
//   e.preventDefault();
// });
  $(".dropdown-reading").click(function(){
    $(".menu-reading").toggleClass("show-menu");
    $(".menu > li").click(function(){
      $(".dropdown-button").html($(this).html());
      $(".menu").removeClass("show-menu");
    });
  });

  $(".dropdown-nystate").click(function(){
    $(".menu-nystate").toggleClass("show-menu");
    $(".menu > li").click(function(){
      $(".dropdown-button").html($(this).html());
      $(".menu").removeClass("show-menu");
    });
  });

  $(".dropdown-writing").click(function(){
    $(".menu-writing").toggleClass("show-menu");
    $(".menu > li").click(function(){
      $(".dropdown-button").html($(this).html());
      $(".menu").removeClass("show-menu");
    });
  });


 $("aside").fitVids();
 
// external js: isotope.pkgd.js
$(document).ready(function() {

  function getHashFilter() {
    var hash = location.hash;
    // get filter=filterName
    var matches = location.hash.match(/filter=([^&]+)/i);
    var hashFilter = matches && matches[1];
    return hashFilter && decodeURIComponent(hashFilter);
  }

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.item'
  });

  // store filter for each group
  var filters = {};

  $('.filters').on('click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[filterGroup] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues(filters);
    // set filter for Isotope
    ///////////////////////////////////$grid.isotope({ filter: filterValue });

    location.hash = 'filter=' + encodeURIComponent(filterValue);

  });

  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  var isIsotopeInit = false;

  function onHashchange() {
    var hashFilter = getHashFilter();
    if (!hashFilter && isIsotopeInit) {
      return;
    }

    // filter isotope
    $grid.isotope({
      itemSelector: '.item',
      filter: hashFilter 
    });
    
    // set selected class on button
    // only on page load, if isotope hasn't inited yet
    if (!isIsotopeInit && hashFilter) {
      var buttonsFilterSelector = getButtonsFilterSelector(hashFilter);
      // trigger click to make it selected and act normal
      // sets correct filter state
      $('.filters').find(buttonsFilterSelector).trigger('click');
    }
    
    isIsotopeInit = true;
  }

  $(window).on('hashchange', onHashchange);
  // trigger event handler to init Isotope
  onHashchange();

});

// flatten object by concatting values
function concatValues(obj) {
  var value = '';
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

// get filter selectors from hash
function getButtonsFilterSelector(hashFilter){
  var filters = hashFilter.substring(1).split(".");
  var joinedFilters = filters.join('"], [data-filter=".');
  var selector = '[data-filter=".' + joinedFilters + '"]';
  return selector;
}
////////////////////////////////////////////////////
//opens non-local links in new window
// $('a:not([href^="http://wwb-campus.org"]):not([href^="#"]):not([href^="/"])').attr("target","_blank");

  var menu = $('#navigation-menu');

  var menuToggle = $('#js-mobile-menu');
  //var signUp = $('.sign-up');
  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
  // underline under the active nav item
  $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
  });

// function printDiv1() {
//   var printContents = document.getElementById('teaching-ideas').innerHTML;
//   var originalContents = document.body.innerHTML;
//   document.body.innerHTML = printContents;
//   window.print();
//   document.body.innerHTML = originalContents;
//    }

 function printDivTeacingIdeas()
  {
    var myWindow=window.open('','','width=600,height=700, left=100');
    var printContents = document.getElementById('teaching-ideas-content').innerHTML;
     myWindow.document.write(printContents);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();

  }
  function printDivLiterature()
  {
    var myWindow=window.open('','','width=600,height=700, left=100');
    var printContents = document.getElementById('literature').innerHTML;
     myWindow.document.write(printContents);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();

  }
  function printDivBios()
  {
    var myWindow=window.open('','','width=600,height=700, left=100');
    var printContents = document.getElementById('bios').innerHTML;
     myWindow.document.write(printContents);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();

  }
$(function () {
     $('.script-only').removeClass('hidden');
 });


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top - 100}, 600);
        return false;
      }
    }
  });
});