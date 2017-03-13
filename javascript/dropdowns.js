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

