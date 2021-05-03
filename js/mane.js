import galleryList from './gallery-items.js';
console.log(galleryList);

const gallery = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryList);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

function createGalleryCardsMarkup(galleryList) {
  return galleryList
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a
        class="gallery__link"
        href="${preview}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join('');
};

gallery.insertAdjacentHTML('beforeend', cardsMarkup);

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = evt.target;
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }