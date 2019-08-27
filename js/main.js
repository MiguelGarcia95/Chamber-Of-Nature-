function selectMenu() {
  var isMenuOpen = false;
  var selectButton = document.getElementById('select');
  var selectOptions = document.querySelectorAll('.select-options');
  toggleMenu();

  function toggleMenu() {
    if (isMenuOpen) {
      selectButton.classList.add('open');
    } else {
      selectButton.classList.remove('open');
    }
  }


  selectButton.addEventListener('click', function() {
    isMenuOpen = !isMenuOpen;
    toggleMenu();
  })

  for (let i = 0; i < selectOptions.length; i++) {
    selectOptions[i].addEventListener('click', function() {
      for (let j = 0; j < selectOptions.length; j++) {
        if (selectOptions[j].classList.contains('selected')) {
          selectOptions[j].classList.remove('selected');
        }
      }
      this.classList.add('selected');
    })
  }
}

selectMenu()

// var loadBackgroundAnim = new TimelineMax();
var backgroundAnim = new TimelineMax(),
    controller = new ScrollMagic.Controller(),
    sun = document.querySelector('.sun'),
    fireflies = Array.from(document.querySelectorAll('.firefly')).reverse();

for (let i = 0; i < fireflies.length; i++) {
  var firefliesTl = new TimelineMax({repeat: -1});
  let xMovement = Math.random() * 500
  let yMovement = Math.random() * 500

  firefliesTl
  .to(fireflies[i], 10, {y: `-=${yMovement}px`, x: `+=${xMovement}px`})
  .to(fireflies[i], 10, {y: `+=${yMovement}px`, x: `-=${xMovement}px`});
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
  .to('.tree_08', 1, {scale: 0.7, transformOrigin: 'center bottom', autoAlpha: 0})
  .to('.firefly', 3, {transformOrigin: 'center top', scale: 0})
  .to('.floor_01', 1, {scale: 7, transformOrigin: 'center bottom'})
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
