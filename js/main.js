function stopFireflies() {
  // for (let i = 0; i < tlList.length; i++) {
  //   tlList[i].pause();
  // }
}

// var loadBackgroundAnim = new TimelineMax();
var backgroundAnim = new TimelineMax(),
    contentAnim = new TimelineMax();
var controller = new ScrollMagic.Controller();

var sun = document.querySelector('.sun'),
    fireflies = Array.from(document.querySelectorAll('.firefly')).reverse();
// var tlList = [];

for (let i = 0; i < fireflies.length; i++) {
  var firefliesTl = new TimelineMax({repeat: -1});
  let xMovement = Math.random() * 500
  let yMovement = Math.random() * 500

  firefliesTl
  .to(fireflies[i], 10, {y: `-=${yMovement}px`, x: `+=${xMovement}px`})
  .to(fireflies[i], 10, {y: `+=${yMovement}px`, x: `-=${xMovement}px`});

  // tlList.push(firefliesTl);
}

backgroundAnim
  .fromTo(sun, 1, {y: '-=100px'}, {y: '100%', scale: .5})
  .to('.mountain', 1, {scale: 0.5, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_line', 1, {scale: 0, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.floor_02', 2, {scale: 0, transformOrigin: 'center bottom', autoAlpha: 0.5}, '-=0.7')
  .to('.tree_05', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_04', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_06', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_07', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_03', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_01', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_09', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_02', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.tree_08', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0, onComplete: stopFireflies})
  .to('.firefly', 3, {transformOrigin: 'center top', scale: 0})
  .to('.floor_01', 1, {scale: 5, transformOrigin: 'center bottom'})
  // .to(['.tree', '.mountain', sun], 0.1, {scale: 0})
  .to('.header-content', 1, {autoAlpha: 0})
  .to('.header-background', 1, {autoAlpha: 0})



var backgroundScene = new ScrollMagic.Scene({
  triggerElement: '.bg-trigger',
  triggerHook: 0,
  duration: '300%',
})
.setTween(backgroundAnim)
.setPin('.bg-trigger')
.addIndicators()
.addTo(controller);

contentAnim
// .to('.header-background', 1, {y: '-100%'})
// .set('.content', {display: 'block'})
.to('.content-first', 1, {autoAlpha: 1})
// .to('.description-image', 1, {autoAlpha: 1})
.to('.content-first', 1, {autoAlpha: 0})
// .to('.description-image', 1, {autoAlpha: 0})
.to('.content-second', 1, {autoAlpha: 1})
// .to('.order-image', 1, {autoAlpha: 1})
.to('.content-second', 1, {autoAlpha: 0})
// .to('.order-image', 1, {autoAlpha: 0})
.to('.content-third', 1, {autoAlpha: 1})
.to('.content-third', 1, {autoAlpha: 0})

var contentScene = new ScrollMagic.Scene({
  triggerElement: '.content-trigger',
  triggerHook: '50%',
  duration: '200%'
})
.setTween(contentAnim)
.setPin('.content-trigger')
.addIndicators()
.addTo(controller)
