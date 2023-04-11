// TO DO:
// 1. Add simple contents
// 2. Style (including some effect to show which page the user is on)

import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

function loadNavBar() {
  const content = document.querySelector('#content');

  const navBar = document.createElement('div');
  navBar.classList.add('navBar');

  const header = document.createElement('h1');
  header.textContent = 'Prime Cuts';
  navBar.appendChild(header);

  const home = document.createElement('a');
  home.href = '#';
  home.textContent = 'Home';
  home.addEventListener('click', () => {
    clearContent();
    document.body.appendChild(loadHomePage());
  });
  navBar.appendChild(home);

  const menu = document.createElement('a');
  menu.href = '#';
  menu.textContent = 'Menu';
  menu.addEventListener('click', () => {
    clearContent();
    document.body.appendChild(loadMenuPage());
  });
  navBar.appendChild(menu);

  const contact = document.createElement('a');
  contact.href = '#';
  contact.textContent = 'Contact';
  contact.addEventListener('click', () => {
    clearContent();
    document.body.appendChild(loadContactPage());
  });
  navBar.appendChild(contact);

  content.appendChild(navBar);

  return content;
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

console.log('This seem to be working.');
