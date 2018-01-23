$(document).ready(function() {
  window.dancers = [];
  // var $dancers = $('.dancer');
  // var $dancers = dancers.map((dancer)=>{ return dancer.$node; });
  
  $('.addDancerButton').on('click', function(event) {
    lineUp = 'dance';
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];  

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    dancers.push(dancer); 
    
    $('body').append(dancer.$node);
  
  });

  $('.lineUpButton').on('click', function(event) {
    lineUp = 'lineUp';
    
  });
 
  $('.mingleButton').on('click', function(event) {
    // dancers[0].mingle();
    lineUp = 'mingle';

  });
  
  $('body').on('mouseover', 'span.dancer', function(event) {
   
    $(this).animate({height: '30px', width: '30px'}, 600);
  });
});

