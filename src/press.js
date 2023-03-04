function loadPress() {
  const h2 = document.querySelector('h2');
  h2.textContent = 'Press';

  const content = document.querySelector('#content');

  const video = document.createElement('div');
  video.className = 'video-container';
  video.innerHTML = '<iframe class="video" src="https://www.youtube.com/embed/ZLOSH5FUnrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  content.appendChild(video);

  const articlesList = document.createElement('ul');

  const heading = document.createElement('h3');
  heading.textContent = 'FEATURED ARTICLES';
  content.appendChild(heading);

  const articles = [
    '2021 - SHOUT OUT LA, "Meet Lauren Mendelsohn-Bass: Artist"',
    '2018 - Art and Cake, "Lauren Mendelsohn-Bass Candy Coats Noir Cool"',
    '2017 - Diversions LA, "Lauren Mendelsohn-Bass: Art Noir"',
    '2017 - ART VOICES, "Lauren Mendelsohn-Bass - The Perceptual Allure"',
  ];

  const links = [
    'https://shoutoutla.com/meet-lauren-mendelsohn-bass-artist/',
    'https://artandcakela.com/2018/10/12/lauren-mendelsohn-bass-candy-coats-noir-cool/',
    'http://www.diversionsla.com/lauren-mendelsohn-bass-art-noir/',
    'https://jillthayer.wordpress.com/2017/10/02/lauren-mendelsohn-bass-the-perceptual-mystique/',
  ];

  articles.forEach((article) => {
    const li = document.createElement('li');
    li.classList.add('exhibit');
    li.innerHTML = `<a href="${links[articles.indexOf(article)]}" target="_blank">${article}`;
    articlesList.appendChild(li);
  });

  content.appendChild(articlesList);
}

export default loadPress;
