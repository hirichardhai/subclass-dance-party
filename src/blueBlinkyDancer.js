var MakeBlueBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blueDancer');
};
MakeBlueBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlueBlinkyDancer.prototype.constructor = MakeBlueBlinkyDancer;

MakeBlueBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeBlueBlinkyDancer.prototype.step = function() {
  console.log('old step:', this.oldStep);
  this.oldStep();
  this.$node.toggle();
};