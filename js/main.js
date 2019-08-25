// var backgroundAnim = new TimelineMax({repeat: -1});
var backgroundAnim = new TimelineMax();
// var loadBackgroundAnim = new TimelineMax();

var sun = document.querySelector('.sun');
// var sun = document.querySelectorAll('.tree');

backgroundAnim
  .to(sun, 2, {y: '+=100px'})
  .to(sun, 2, {y: '-=100px'})
  .to('.tree_02', 2, {x: '+=100px', y: '+=100px'}, '-=2')
  .to('.tree_02', 2, {x: '-=100px', y: '-=100px'})
