var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
  this.$node.attr('src', 'https://media.giphy.com/media/IU4z4sZ3BZ3zO/giphy.gif');

};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function() {
  console.log('old step:', this.oldStep);
  // this.oldStep();
  this.$node.toggle();
};