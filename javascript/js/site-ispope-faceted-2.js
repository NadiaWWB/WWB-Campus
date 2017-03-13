$(function(){

  var $container = $('#container'),
      $checkboxes = $('#filters input');

  $container.isotope({
    itemSelector: '.item',
     filter: '.mexico'
  });

  $checkboxes.change(function(){
    var filters = [];
    // get checked checkboxes values
    $checkboxes.filter(':checked').each(function(){
      filters.push( this.value );
    });
    // ['.red', '.blue'] -> '.red, .blue'
    filters = filters.join(', ');
    $container.isotope({ filter: filters });
  });

  // $('#shuffle').click(function(){
  //   $container.isotope('shuffle');
  // });

  var $items = $container.children();


});
