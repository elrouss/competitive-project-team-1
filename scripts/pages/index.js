// ФУНКЦИИ
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

// Секция "Bicycles". Рендеринг карточек
function createCardBicycle(card) {
  const { heading, image, link } = card;

  const cardItem = cardTemplateBicycle.cloneNode(true);
  const cardContent = cardItem.querySelector('.bicycles__gallery-card');
  cardContent.classList.add('bicycles__gallery-card_is-visibile');

  const cardHeading = cardContent.querySelector('.bicycles__gallery-image-caption');
  const cardImage = cardContent.querySelector('.bicycles__gallery-image');
  const cardLink = cardContent.querySelector('.bicycles__gallery-link');

  cardHeading.textContent = heading;
  cardImage.alt = `Велосипед модели "${heading}"`;
  cardImage.src = image;
  cardLink.href = link;

  return cardItem;
}

function renderCardsBicycles(key, container) {
  Object.values(initialCardsBicycles[key]).forEach(card => {
    container.append(createCardBicycle(card));
  });
}

renderCardsBicycles(Object.keys(initialCardsBicycles)[0], galleryBicyclesSliderHighway);
renderCardsBicycles(Object.keys(initialCardsBicycles)[1], galleryBicyclesSliderGravel);
renderCardsBicycles(Object.keys(initialCardsBicycles)[2], galleryBicyclesSliderTimeTrial);

function hideBicyclesGallery() {
  galleryBicycles.forEach(gallery => {
    gallery.classList.remove('bicycles__gallery_is-active');
  });
}

function showCardsBicycles(key) {
  if (key === 'highway') galleryBicyclesHighway.classList.add('bicycles__gallery_is-active');
  if (key === 'gravel') galleryBicyclesGravel.classList.add('bicycles__gallery_is-active');
  if (key === 'timeTrial') galleryBicyclesTimeTrial.classList.add('bicycles__gallery_is-active');
}

function toggleCardsBicyclesTabBar(evt) {
  const id = evt.target.dataset.id;

  if (id) {
    document.querySelectorAll('.bicycles__link').forEach(btn => {
      btn.classList.remove('bicycles__link_selected');
    });
    evt.target.classList.add('bicycles__link_selected');

    hideBicyclesGallery();
    showCardsBicycles(id);
  };
}

function toggleCardsBicyclesDropdown(evt) {
  const value = evt.target.value;

  if (value) {
    hideBicyclesGallery();
    showCardsBicycles(value);
  };
}

// ОБРАБОТЧИКИ СОБЫТИЙ
arrowNextSliderSectionRoads.addEventListener('click', handleIncrementClick);
arrowPrevSliderSectionRoads.addEventListener('click', handleDecrementClick);

arrowNextSliderSectionRoads.addEventListener('keydown', handleIncrementAndDecrementBtns);
arrowPrevSliderSectionRoads.addEventListener('keydown', handleIncrementAndDecrementBtns);

tabBarBicycles.addEventListener('click', toggleCardsBicyclesTabBar);
dropdownBicycles.addEventListener('change', toggleCardsBicyclesDropdown);

window.onload = () => {
  sliderIcons[0].classList.add('roads__vector_visibility_is-visible');
}
