function printDiv1() {
  var printContents = document.getElementById('teaching-ideas').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
   }
 function printDivTeacingIdeas()
  {
    var printContents = document.getElementById('teaching-ideas-content').innerHTML;
    var myWindow=window.open('','','width=600,height=700, left=100');
     myWindow.document.write('<html><head><title>Print Bios</title><link rel="stylesheet" type="text/css" href="http://campus.dev/assets/css/print.css"></head><body>' + printContents + '</body></html>');
    setTimeout(function(){
      myWindow.print();
    }, 500);

    //myWindow.close();
    setTimeout(function(){
      myWindow.close();
    }, 500);

  }
  function printDivBios()
  {
    var printContents = document.getElementById('bios').innerHTML;
    var myWindow=window.open('','','width=600,height=700, left=100');
     myWindow.document.write('<html><head><title>Print Bios</title><link rel="stylesheet" type="text/css" href="http://campus.dev/assets/css/print.css"></head><body>' + printContents + '</body></html>');
    setTimeout(function(){
      myWindow.print();
    }, 700);

    //myWindow.close();
    setTimeout(function(){
      myWindow.close();
    }, 800);

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
  });

$('.footer-sur').waypoint('sticky', {
  direction: 'down right',
  stuckClass: 'stuck',
  wrapper: '<div class="sticky-wrapper">'
});

$(function () {
     $('.script-only').removeClass('hidden');
 });