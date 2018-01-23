// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img>');

  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function(left) {

//   for (var i = 0; i < window.dancers.length; i++) {
    
// }
//   var newLeft =

  var styleSettings = {
    top: '600px',
    left: left
  };
  this.$node.css(styleSettings);
};