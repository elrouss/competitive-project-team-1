// Секция "Roads" (со слайдером)
const titleSectionRoads = document.querySelector('.roads__title');
const textSectionRoads = document.querySelector('.roads__paragraph');
const arrowPrevSliderSectionRoads = document.querySelector('.roads__slider-arrow-prev');
const arrowNextSliderSectionRoads = document.querySelector('.roads__slider-arrow-next');

const templateSlideRoads = document.querySelector('.roads__template-slide').content;
const sliderContainerRoads = document.querySelector('.roads__slider');

// Секция "Bicycles" (со слайдером и переключателем)
const galleryBicycles = document.querySelectorAll('.bicycles__gallery');

const galleryBicyclesHighway = document.querySelector('#highwayGallery');
const galleryBicyclesSliderHighway = galleryBicyclesHighway.querySelector('.splide__list');

const galleryBicyclesGravel = document.querySelector('#gravelGallery');
const galleryBicyclesSliderGravel = galleryBicyclesGravel.querySelector('.splide__list');

const galleryBicyclesTimeTrial = document.querySelector('#timeTrialGallery');
const galleryBicyclesSliderTimeTrial = galleryBicyclesTimeTrial.querySelector('.splide__list');

const linksTemplateBicycles = document.querySelector('.bicycles__template-links').content;
const linkTemplateBicycles = document.querySelector('.bicycles__line-link');

const cardTemplateBicycle = document.querySelector('.bicycles__card-template').content;
const tabBarBicycles = document.querySelector('.bicycles__links');
const dropdownBicycles = document.querySelector('#dropdown');

// Форма с электронным адресом
const formEmail = document.querySelector('.form');
const inputEmail = document.querySelector('.form__contact-email');
const formSubmitBtn = document.querySelector('.form__submit-btn');
const formSubmitMsgSuccess = document.querySelector('.form__submit-msg');

// Переключение светлой/темной темы
// const themeBtnContainer = document.querySelector('.switcher-color-theme__btn-container');
// const themeBtn = document.querySelector('.switcher-color-theme__btn');

// Бургер меню
const burgerButton = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu')
const body = document.body
const menu = document.querySelector(".header__items");
