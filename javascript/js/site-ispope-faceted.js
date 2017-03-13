$( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.item'
  });
  var $output = $('#filter-display'); //bp
  // store filter for each group
  var filters = {};
  var labels = {};
  $('#filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.option-set');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    // set filter for Isotope
    $container.isotope({ filter: filterValue });
    //display labels for each filter
    labels[ filterGroup ] = $this.attr('data-label');
    var labelValue = '<small>Searched for: </small> ';
    for ( var prop in labels ) {
      if ( labels[ prop ] != undefined) {
        labelValue += labels[ prop ] +' <span class="light">&nbsp;&nbsp;</span> ';
      }
    }
  $output.html( '<h4>' + labelValue + '</h4>');
    console.log( 'Searched for: ' + labelValue.length + ' items' );
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

});
///

//isotope

$( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.item',
    //layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-grp').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

});