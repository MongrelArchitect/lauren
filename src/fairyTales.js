import { fairyTales } from './artwork';
import viewArt from './viewArt';

function loadTales() {
  const h2 = document.querySelector('h2');
  h2.textContent = 'Fun and Games';

  const artwork = document.createElement('div');
  artwork.setAttribute('id', 'artwork');

  const content = document.querySelector('#content');
  fairyTales.forEach((painting) => {
    const image = document.createElement('img');
    image.setAttribute('src', painting.thumb);
    image.setAttribute('alt', painting.title);
    image.setAttribute('data-collection', 'fairyTales');
    image.classList.add('thumb');
    image.addEventListener('click', viewArt);
    artwork.appendChild(image);
  });

  content.appendChild(artwork);
}

export default loadTales;
