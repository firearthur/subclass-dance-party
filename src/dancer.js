var lineUp = 'dance';

class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.step(timeBetweenSteps);
  
  }
  
  step (timeBetweenSteps) {
    var context = this; 
  
    if (lineUp === 'dance') {
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
  }

  setPosition (top, left) {
    var styleSettings = {
      top: top,
      left: left,
    };
    this.$node.css(styleSettings);
  }
 
  lineUp () {
    var left = 100;
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].setPosition(50, left);
      left += 200;
    }  
  }
 
  mingle () {
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
  }
}


var colorGenerator = function() {
  return Math.floor(Math.random() * 256);
}; 

