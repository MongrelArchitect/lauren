import { candy } from './artwork';
import viewArt from './viewArt';

function loadCandy() {
  const h2 = document.querySelector('h2');
  h2.textContent = 'Candy';

  const artwork = document.createElement('div');
  artwork.setAttribute('id', 'artwork');

  const content = document.querySelector('#content');
  candy.forEach((painting) => {
    const image = document.createElement('img');
    image.setAttribute('src', painting.thumb);
    image.setAttribute('alt', painting.title);
    image.setAttribute('data-collection', 'candy');
    image.classList.add('thumb');
    image.addEventListener('click', viewArt);
    artwork.appendChild(image);
  });

  content.appendChild(artwork);
}

export default loadCandy;
