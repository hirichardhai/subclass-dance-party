// Homer
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
  this.oldStep();
  this.$node.toggle();
  // this.$node.hide(800);
  // this.$node.show(800);
  var randomTop = Math.floor(Math.random() * 100);
  var randomLeft = Math.random() * 1000;
  this.$node.animate({
    left: randomLeft,
    top: 'randomTop' + '%'
  }
  );
  
};