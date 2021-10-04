function loadHome() {
  const h2 = document.querySelector('h2');
  h2.textContent = 'Fine Art';

  const content = document.querySelector('#content');

  const image = document.createElement('img');
  image.setAttribute('src', 'images/front.png');
  image.setAttribute('alt', 'A painting titled "Ring Pop the Question"');
  image.setAttribute('id', 'front-img');
  content.appendChild(image);
}

export default loadHome;
