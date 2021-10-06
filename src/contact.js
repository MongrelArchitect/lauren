function loadContact() {
  const h2 = document.querySelector('h2');
  h2.textContent = 'Contact';

  const content = document.querySelector('#content');

  const link = document.createElement('a');
  link.setAttribute('href', 'mailto:lmbass@roadrunner.com?Subject=Art');
  link.textContent = 'lmbass@roadrunner.com';
  content.textContent = 'email: ';

  content.appendChild(link);
}

export default loadContact;
