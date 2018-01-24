// Lisa
var MakeBlueBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blueDancer');
  this.$node.attr('src', 'https://vignette.wikia.nocookie.net/animaljam/images/b/bc/Lisa_dancing.gif/revision/latest?cb=20150409231619');
};
MakeBlueBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlueBlinkyDancer.prototype.constructor = MakeBlueBlinkyDancer;

MakeBlueBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeBlueBlinkyDancer.prototype.step = function() {
  console.log('old step:', this.oldStep);
  this.oldStep();
  // this.$node.toggle();
  // this.$node.hide(400);
  // this.$node.flip()
  // this.$node.show(800);
  var randomTop = Math.floor(Math.random() * 100);
  var randomLeft = Math.random() * 1000;
  this.$node.animate({
    left: randomLeft,
    top: randomTop + '%'
  }
  );
};