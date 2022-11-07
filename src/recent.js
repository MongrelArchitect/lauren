import { recent } from './artwork';
import viewArt from './viewArt';

function loadRecent() {
  const h2 = document.querySelector('h2');
  h2.textContent = 'Pop Fiction';

  const artwork = document.createElement('div');
  artwork.setAttribute('id', 'artwork');

  const content = document.querySelector('#content');
  recent.forEach((painting) => {
    const image = document.createElement('img');
    image.setAttribute('src', painting.thumb);
    image.setAttribute('alt', painting.title);
    image.classList.add('thumb');
    image.addEventListener('click', viewArt);
    artwork.appendChild(image);
  });

  content.appendChild(artwork);
}

export default loadRecent;
