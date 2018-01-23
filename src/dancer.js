var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
};

var lineUp = false;
 
makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this; 
  if (!lineUp) {
  
    setTimeout(function() {
      context.setPosition(Math.random() * 500, Math.random() * 500);
      context.step(timeBetweenSteps);
    }, timeBetweenSteps);
  } else {
  
    var left = 100;
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].setPosition(50, left);
      left += 200;
    }

  }
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  
 
  var styleSettings = {
    top: top,
    left: left,
    // borderColor : 'rgb(' + colorGenerator() + ', ' + colorGenerator() + ', ' + colorGenerator() + ')'
    // 'background-color': 'rgb(100, 50, 45)'
  };
  this.$node.css(styleSettings);
};

var colorGenerator = function() {
  return Math.floor(Math.random() * 256);
}; 