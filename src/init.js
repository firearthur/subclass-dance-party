$(document).ready(function() {
  window.dancers = [];
  
  $('.addDancerButton').on('click', function(event) {
    lineUp = 'dance';
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].step(Math.random() * 1000);
    }
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];  

    // make a dancer with a random position
    console.log(dancerMakerFunctionName);
    console.log(dancerMakerFunction);
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    dancers.push(dancer); 
    
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    lineUp = 'lineUp';
  });
 
  $('.mingleButton').on('click', function(event) {
    lineUp = 'mingle';
  });
  
  $('body').on('mouseover', 'span.dancer', function(event) {
    $(this).animate({height: '30px', width: '30px'}, 600);
  });
});

