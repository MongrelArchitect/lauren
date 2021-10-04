import { candy, recent } from './artwork';

function clear() {
  const grayout = document.querySelector('#grayout');
  const paintingImage = document.querySelector('#painting');
  grayout.removeAttribute('style');
  paintingImage.innerHTML = '';
}

function display(painting) {
  const grayout = document.querySelector('#grayout');
  grayout.setAttribute('style', 'display: block;');

  const close = document.querySelector('#close');
  close.addEventListener('click', clear);

  const paintingImage = document.querySelector('#painting');
  const image = document.createElement('img');
  image.setAttribute('src', painting.url);
  image.setAttribute('alt', painting.title);
  image.setAttribute('id', 'painting-image');
  paintingImage.appendChild(image);

  const paintingTitle = document.querySelector('#painting-title');
  const paintingSize = document.querySelector('#painting-size');
  const paintingType = document.querySelector('#painting-type');
  const paintingSold = document.querySelector('#painting-sold');

  paintingTitle.textContent = painting.title;
  paintingSize.textContent = painting.size;
  paintingType.textContent = painting.type;
  if (painting.sold) {
    paintingSold.innerHTML = 'SOLD';
  } else {
    paintingSold.innerHTML = '';
  }
}

function viewArt() {
  const { collection } = this.dataset;
  let current;

  if (collection === 'candy') {
    current = candy;
  } else {
    current = recent;
  }

  current.forEach((painting) => {
    if (painting.title === this.alt) {
      display(painting);
    }
  });
}

export default viewArt;
