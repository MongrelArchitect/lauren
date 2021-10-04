import loadHome from './home';
import loadProfile from './profile';
import loadRecent from './recent';
import loadCandy from './candy';
import loadContact from './contact';

function clearContent() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
}

function activeLink(id) {
  const links = document.querySelectorAll('.link');
  links.forEach((link) => {
    link.classList.remove('active');
    if (id === link.id) {
      link.classList.add('active');
    }
  });
}

function changeContent(id) {
  clearContent();
  activeLink(id);

  switch (id) {
    case 'home':
      loadHome();
      break;
    case 'profile':
      loadProfile();
      break;
    case 'recent':
      loadRecent();
      break;
    case 'candy':
      loadCandy();
      break;
    case 'contact':
      loadContact();
      break;
    default:
      break;
  }
}

function navigate() {
  const navLinks = document.querySelectorAll('.link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      changeContent(link.id);
    });
  });
}

export default navigate;
