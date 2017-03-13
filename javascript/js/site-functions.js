

function printDiv1() {

  var printContents = document.getElementById('teaching-ideas').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;

   }


 function printDivTeacingIdeas()
  {
    var myWindow=window.open('','','width=600,height=700, left=100');
    var printContents = document.getElementById('teaching-ideas').innerHTML;
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





 $("aside").fitVids();

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


$('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }

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
});

// $('.footer-sur').waypoint('sticky', {
//   direction: 'down right',
//   stuckClass: 'stuck',
//   wrapper: '<div class="sticky-wrapper">'
// });

//== FILTERS ==//

    // var options = {
    //     valueNames: [ 'name', 'slug' , 'genre', 'unit', 'theme', 'authors'],
    //     listClass: 'list-filter',
    //     page: 2000 // how many items should first show up on the page - affects performance
    //     // add tagline, or option for it?
    // };


// var options = {
//   valueNames: [ 'themes', 'genre' ]
// };

// var articlesList = new List('container-filter', options);

// var filterBtns = $('input[name="filter"]');

// filterBtns.change(function() {

//   var validValues = [];

//   filterBtns.each(function() {
//     if ($(this).is(':checked')) {
//       validValues.push($(this).val());
//     }
//   });
//   articlesList.filter(function(item) {
//     if (validValues.indexOf(item.values().genre) > 'poetry') {
//       return true;
//     } else {
//       return false;
//     }

//   });
// });
$(function () {
     $('.script-only').removeClass('hidden');
 });


