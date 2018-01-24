class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step (timeBetweenSteps) {
    super.step(timeBetweenSteps);
    this.$node.toggle();
  }
}


window.BlinkyDancer = BlinkyDancer;