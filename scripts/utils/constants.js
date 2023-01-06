// Секция "Roads" (со слайдером)
const titleSectionRoads = document.querySelector('.roads__title');
const textSectionRoads = document.querySelector('.roads__paragraph');
const arrowPrevSliderSectionRoads = document.querySelector('.roads__slider-arrow-prev');
const arrowNextSliderSectionRoads = document.querySelector('.roads__slider-arrow-next');
const sliderIcons = document.querySelectorAll('.roads__vector');

// Секция "Bicycles" (со слайдером и переключателем)
const galleryBicycles = document.querySelectorAll('.bicycles__gallery');

const galleryBicyclesHighway = document.querySelector('#highwayGallery');
const galleryBicyclesSliderHighway = galleryBicyclesHighway.querySelector('.splide__list');

const galleryBicyclesGravel = document.querySelector('#gravelGallery');
const galleryBicyclesSliderGravel = galleryBicyclesGravel.querySelector('.splide__list');

const galleryBicyclesTimeTrial = document.querySelector('#timeTrialGallery');
const galleryBicyclesSliderTimeTrial = galleryBicyclesTimeTrial.querySelector('.splide__list');

const cardTemplateBicycle = document.querySelector('.bicycles__card-template').content;
const tabBarBicycles = document.querySelector('.bicycles__links');
const dropdownBicycles = document.querySelector('#dropdown');

// Переключение светлой/темной темы
const themeBtnContainer = document.querySelector('.switcher-color-theme__btn-container');
const themeBtn = document.querySelector('.switcher-color-theme__btn');
