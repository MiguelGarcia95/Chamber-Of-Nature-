var backgroundAnim = new TimelineMax();
// var loadBackgroundAnim = new TimelineMax();
var controller = new ScrollMagic.Controller();

var sun = document.querySelector('.sun');

var fireflies = Array.from(document.querySelectorAll('.firefly')).reverse();

for (let i = 0; i < fireflies.length; i++) {
  var firefliesTl = new TimelineMax({repeat: -1});
  let xMovement = Math.random() * 500
  let yMovement = Math.random() * 500

  firefliesTl
  .to(fireflies[i], 10, {y: `-=${yMovement}px`, x: `+=${xMovement}px`})
  .to(fireflies[i], 10, {y: `+=${yMovement}px`, x: `-=${xMovement}px`})
}

backgroundAnim
  .fromTo(sun, 1, {y: '-=100px'}, {y: '100%', scale: .5})
  .to('.mountain', 1, {scale: 0.5, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_line', 1, {scale: 0, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.floor_02', 1, {scale: 0.5, transformOrigin: 'center bottom', autoAlpha: 0.5}, '-=0.7')
  .to('.tree_05', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_04', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_06', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_07', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_03', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_01', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_09', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_02', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_08', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.firefly', 3, {transformOrigin: 'center top', scale: 0}, '-=1')
  .to('.floor_01', 1, {scale: 5, transformOrigin: 'center bottom'})
  .to('.header-background', 2, {y: '-100%'})


var backgroundScene = new ScrollMagic.Scene({
  triggerElement: '.bg-trigger',
  triggerHook: 0,
  duration: '150%',
})
.setTween(backgroundAnim)
.setPin('.bg-trigger')
.addIndicators()
.addTo(controller)