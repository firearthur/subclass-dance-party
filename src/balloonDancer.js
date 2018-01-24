class BalloonDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps); 
  }
  step (timeBetweenSteps) {
    super.step(timeBetweenSteps);
    this.$node.css(styleSettings);
  }
}

var styleSettings = {
  'border': 'none',
  'background-image' : 'url("imgs/1.gif")',
  'background-repeat': 'no-repeat',
  'width': '150px',
  'height': '300px'
};

window.BalloonDancer = BalloonDancer;

