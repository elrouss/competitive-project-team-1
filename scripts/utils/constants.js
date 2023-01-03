// ПЕРЕМЕННЫЕ
// Секция Roads (со слайдером)
const titleSectionRoads = document.querySelector('.roads__title');
const textSectionRoads = document.querySelector('.roads__paragraph');
const arrowPrevSliderSectionRoads = document.querySelector('.roads__slider-arrow-prev');
const arrowNextSliderSectionRoads = document.querySelector('.roads__slider-arrow-next');
const sliderIcons = document.querySelectorAll('.roads__vector');


// ОБЪЕКТЫ
const sliderSectionRoads = {
  highway: {
    title: 'Шоссе',
    text: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.'
  },

  gravel: {
    title: 'Грэвел',
    text: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.'
  },

  timeTrial: {
    title: 'ТТ',
    text: 'ТТ — это велосипед для триатлона или раздельного старта, гоняют на таком велике только по равнинному асфальту, велик очень быстрый и аэродинамичный.'
  }
}
