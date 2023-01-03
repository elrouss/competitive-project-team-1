
// Секция "Roads". Переключение заголовка и текста слайдера
let counter = 1;

function handleIncrementClick() {
  counter += 1;
  handleDescriptionSlide();
}

function handleDecrementClick() {
  counter -= 1;
  handleDescriptionSlide();
}

function handleIncrementAndDecrementBtns(evt) {
  if (evt.key === 'ArrowRight') {
    counter += 1;
  }

  if (evt.key === 'ArrowLeft') {
    counter -= 1;
  }

  handleDescriptionSlide();
}

function handleDescriptionSlide() {
  if (counter < -1 || counter > 3) {
    counter = 1;
  }

  if (counter === -2 || counter === 1) {
    titleSectionRoads.textContent = sliderSectionRoads.highway.title;
    textSectionRoads.textContent = sliderSectionRoads.highway.text;

    sliderIcons[0].classList.add('roads__vector_visibility_is-visible');

    if (sliderIcons[1].classList.contains('roads__vector_visibility_is-visible')) {
      sliderIcons[1].classList.remove('roads__vector_visibility_is-visible');
    }

    if (sliderIcons[2].classList.contains('roads__vector_visibility_is-visible')) {
      sliderIcons[2].classList.remove('roads__vector_visibility_is-visible');
    }
  }

  if (counter === -1 || counter === 2) {
    titleSectionRoads.textContent = sliderSectionRoads.gravel.title;
    textSectionRoads.textContent = sliderSectionRoads.gravel.text;

    sliderIcons[1].classList.add('roads__vector_visibility_is-visible');

    if (sliderIcons[0].classList.contains('roads__vector_visibility_is-visible')) {
      sliderIcons[0].classList.remove('roads__vector_visibility_is-visible');
    }

    if (sliderIcons[2].classList.contains('roads__vector_visibility_is-visible')) {
      sliderIcons[2].classList.remove('roads__vector_visibility_is-visible');
    }
  }

  if (counter === 0 || counter === 3) {
    titleSectionRoads.textContent = sliderSectionRoads.timeTrial.title;
    textSectionRoads.textContent = sliderSectionRoads.timeTrial.text;

    sliderIcons[2].classList.add('roads__vector_visibility_is-visible');

    if (sliderIcons[0].classList.contains('roads__vector_visibility_is-visible')) {
      sliderIcons[0].classList.remove('roads__vector_visibility_is-visible');
    }

    if (sliderIcons[1].classList.contains('roads__vector_visibility_is-visible')) {
      sliderIcons[1].classList.remove('roads__vector_visibility_is-visible');
    }
  }
}

arrowNextSliderSectionRoads.addEventListener('click', handleIncrementClick);
arrowPrevSliderSectionRoads.addEventListener('click', handleDecrementClick);

arrowNextSliderSectionRoads.addEventListener('keydown', handleIncrementAndDecrementBtns);
arrowPrevSliderSectionRoads.addEventListener('keydown', handleIncrementAndDecrementBtns);

window.onload = () => {
  sliderIcons[0].classList.add('roads__vector_visibility_is-visible');
}
