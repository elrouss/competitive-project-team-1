// Секция "Roads"
const roadsSlider = new Splide('.splide', {
  type: 'loop',
  perPage: 2,
  perMove: 1,
  pagination: false,
  speed: 800,
  drag: false,
  keyboard: 'focused',
  autoWidth: true,
  autoHeight: true,
  gap: 40,
  breakpoints: {
    770: {
      perPage: 1,
      keyboard: false,
    }
  }
}).mount();
