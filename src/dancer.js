var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
};

// var lineUp = false;
var lineUp = 'dance';
 
makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this; 
  // if (!lineUp) {
  //   setTimeout(function() {
  //     context.setPosition(Math.random() * 500, Math.random() * 500);
  //     context.step(timeBetweenSteps);
  //   }, timeBetweenSteps);
  // } else {
  //   setTimeout(function() {
  //     context.lineUp();
  //     context.step(timeBetweenSteps);
  //   }, timeBetweenSteps);
  // }

  if(lineUp === 'dance') {
    setTimeout(function() {
      context.setPosition(Math.random() * 500, Math.random() * 500);
      context.step(timeBetweenSteps);
    }, timeBetweenSteps);
  } else if (lineUp === 'lineUp') {
    setTimeout(function() {
      context.lineUp();
      context.step(timeBetweenSteps);
    }, timeBetweenSteps);
  } else if (lineUp === 'mingle') {
    setTimeout(function() {
      context.mingle();
      context.step(timeBetweenSteps);
    }, timeBetweenSteps);
  }




};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};

var colorGenerator = function() {
  return Math.floor(Math.random() * 256);
}; 

makeDancer.prototype.lineUp = function() {
  var left = 100;
  for (var i = 0; i < dancers.length; i++) {
    dancers[i].setPosition(50, left);
    left += 200;
  }
};

makeDancer.prototype.mingle = function() {
  
  var left = 100;
  for (var i = 0; i < dancers.length; i++) {
    if (i % 2 !== 0) {
      dancers[i].setPosition(50, left);
      left += 200;  
    } else {
      dancers[i].setPosition(50, left);
      left += 150;
    }
    
  }
};

// makeDancer.prototype.freakOut = function() {
//   for (var i = 0; i < dancers.length; i++) {
//     dancers[i].step(100);
//   }
// };
