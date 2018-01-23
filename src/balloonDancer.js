var makeBalloonDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

var styleSettings = {
  'border': 'none',
  'background-image' : 'url("imgs/1.gif")',
  'background-repeat': 'no-repeat',
  'width': '150px',
  'height': '300px'
};

makeBalloonDancer.prototype = Object.create(makeDancer.prototype);
makeBalloonDancer.prototype.oldStep = makeDancer.prototype.step;
// makeBalloonDancer.prototype.oldSetPosition = makeDancer.prototype.setPosition;
makeBalloonDancer.prototype.constructor = makeBalloonDancer;

makeBalloonDancer.prototype.step = function(timeBetweenSteps) {
  // this.setPosition(); 
  this.oldStep(timeBetweenSteps);
  // this.$node.toggle();
 


  this.$node.css(styleSettings);
};



// makeDancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
  
 
//   var styleSettings = {
//     top: top,
//     left: left,
//     borderColor : 'rgb(' + colorGenerator() + ', ' + colorGenerator() + ', ' + colorGenerator() + ')'
//     // 'background-color': 'rgb(100, 50, 45)'
//   };
//   this.$node.css({ });
// };