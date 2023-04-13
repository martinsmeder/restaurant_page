import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

function loadNavBar() {
  const content = document.querySelector('#content');

  // Create navigation and header
  const navBar = document.createElement('div');
  navBar.classList.add('navBar');

  const header = document.createElement('h1');
  header.textContent = 'Prime Cuts';
  navBar.appendChild(header);

  // Handle page clicks and add pages to navigation bar
  const home = document.createElement('a');
  home.href = '#';
  home.textContent = 'Home';
  home.id = 'home-link';
  home.addEventListener('click', () => {
    clearContent();
    document.body.appendChild(loadHomePage());
    setActiveLink('home-link');
  });
  navBar.appendChild(home);

  const menu = document.createElement('a');
  menu.href = '#';
  menu.textContent = 'Menu';
  menu.id = 'menu-link';
  menu.addEventListener('click', () => {
    clearContent();
    document.body.appendChild(loadMenuPage());
    setActiveLink('menu-link');
  });
  navBar.appendChild(menu);

  const contact = document.createElement('a');
  contact.href = '#';
  contact.textContent = 'Contact';
  contact.id = 'contact-link';
  contact.addEventListener('click', () => {
    clearContent();
    document.body.appendChild(loadContactPage());
    setActiveLink('contact-link');
  });
  navBar.appendChild(contact);

  // Add navigation bar to content div
  content.appendChild(navBar);

  return content;
}

function setActiveLink(linkId) {
  const links = document.querySelectorAll('.navBar a');
  links.forEach((link) => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(`#${linkId}`);
  activeLink.classList.add('active');
}

function clearContent() {
  const content = document.querySelector('#content');
  const navbar = document.querySelector('.navBar');

  while (content.firstChild && content.firstChild !== navbar) {
    content.removeChild(content.firstChild);
  }
  while (content.lastChild && content.lastChild !== navbar) {
    content.removeChild(content.lastChild);
  }
}

document.body.appendChild(loadNavBar());
document.body.appendChild(loadHomePage());
setActiveLink('home-link');

console.log('This seem to be working.');
