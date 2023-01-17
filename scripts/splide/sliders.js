// Секция "Roads"
const roadsSlider = new Splide('.roads', {
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
  easing: 'ease',
  breakpoints: {
    770: {
      perPage: 1,
      keyboard: false
    }
  }
}).mount();

// Секция Bicycles
const bicyclesCardsSliderHighway = new Splide('#highwayGallery', {
  perPage: 3,
  drag: false,
  pagination: false,
  autoWidth: true,
  autoHeight: true,
  arrows: false,
  easing: 'ease',
  keyboard: false,
  breakpoints: {
    1310: {
      type: 'slide',
      perPage: 3,
      perMove: 1,
      speed: 300,
      pagination: true,
      drag: true,
      focus: 0,
      omitEnd: true,
      classes: {
        page: 'splide__pagination__page bicycles__gallery-pagination-btn'
      }
    },
    770: {
      perPage: 1,
    }
  }
}).mount();

const bicyclesCardsSliderGravel = new Splide('#gravelGallery', {
  perPage: 3,
  drag: false,
  pagination: false,
  autoWidth: true,
  autoHeight: true,
  arrows: false,
  easing: 'ease',
  keyboard: false,
  breakpoints: {
    1310: {
      type: 'slide',
      perPage: 3,
      perMove: 1,
      speed: 300,
      pagination: true,
      drag: true,
      focus: 0,
      omitEnd: true,
      classes: {
        page: 'splide__pagination__page bicycles__gallery-pagination-btn'
      }
    },
    770: {
      perPage: 1,
    }
  }
}).mount();

const bicyclesCardsSliderTimeTrial = new Splide('#timeTrialGallery', {
  perPage: 3,
  drag: false,
  pagination: false,
  autoWidth: true,
  autoHeight: true,
  arrows: false,
  easing: 'ease',
  keyboard: false,
  breakpoints: {
    1310: {
      type: 'slide',
      perPage: 3,
      perMove: 1,
      speed: 300,
      pagination: true,
      drag: true,
      focus: 0,
      omitEnd: true,
      classes: {
        page: 'splide__pagination__page bicycles__gallery-pagination-btn'
      }
    },
    770: {
      perPage: 1,
    }
  }
}).mount();
