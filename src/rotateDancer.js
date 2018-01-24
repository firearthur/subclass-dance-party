class RotateDancer extends Dancer {
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
  'background-image' : 'url("imgs/j.png")',
  'background-repeat': 'no-repeat',
  'rotation-point':'50% 50%',
  'transform':'rotate(70deg)', 
  'width': '150px',
  'height': '300px',
 
};

window.RotateDancer = RotateDancer;

