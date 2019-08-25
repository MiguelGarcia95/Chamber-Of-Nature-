// var backgroundAnim = new TimelineMax({repeat: -1});
var backgroundAnim = new TimelineMax();

var sun = document.querySelector('.sun');

backgroundAnim
  .from(sun, 2, {y: '-100px'})
  // .to(sun, 2, {y: '-100px'})
