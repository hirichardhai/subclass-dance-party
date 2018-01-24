var MakeJamesRichardDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jamesRichard');
  // this.$image = $('<img src="images/background.png" alt="">');
  this.$node.attr('src', 'https://hitechhalos.files.wordpress.com/2017/02/corgiswimflip.gif?w=267&h=267');
};
MakeJamesRichardDancer.prototype = Object.create(MakeDancer.prototype);
MakeJamesRichardDancer.prototype.constructor = MakeJamesRichardDancer;

MakeJamesRichardDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeJamesRichardDancer.prototype.step = function() {
  console.log('old step:', this.oldStep);
  var colorArray = ['red', 'blue', 'green', 'yellow'];
  var randomTime = Math.random() * 3000;
  var index = Math.floor(Math.random() * 4);
  var newColor = colorArray[index];
  this.$node.css('color', newColor);
  this.oldStep();
  this.$node.slideUp(randomTime);
  this.$node.slideDown(randomTime);
};
