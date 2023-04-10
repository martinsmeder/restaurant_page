// TO DO:
// 1. Home, Menu and Contact pages, each inside a separate module (each module will
//    export a function that creates div element, adds content and style, and append
//    it to the DOM)
// 2. Import them to to index.js and write the tab-switching logic there. Event
//    Listeners for each tab that wipes out the current contents and then runs
//    the correct 'tab module' to populate it again
// IMG's: rawpixel --> https://www.freepik.com/author/rawpixel-com

import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

console.log('This seem to be working.');

function loadNavBar() {
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

  return navBar;
}

function loadFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  const github = document.createElement('a');
  github.href = 'https://github.com/martinsmeder';
  github.target = '_blank';
  github.textContent = 'Coded by: Martin Smeder';
  footer.appendChild(github);

  const rawpixel = document.createElement('a');
  rawpixel.href = 'https://www.freepik.com/author/rawpixel-com';
  rawpixel.target = '_blank';
  rawpixel.textContent = 'Images by: Rawpixel';
  footer.appendChild(rawpixel);

  return footer;
}

function clearContent() {
  const content = document.querySelector('#content');
  const navbar = document.querySelector('.navBar');
  const footer = document.querySelector('.footer');
  while (
    content.firstChild &&
    content.firstChild !== navbar &&
    content.firstChild !== footer
  ) {
    content.removeChild(content.firstChild);
  }
  while (
    content.lastChild &&
    content.lastChild !== navbar &&
    content.firstChild !== footer
  ) {
    content.removeChild(content.lastChild);
  }
}

document.body.appendChild(loadNavBar());
document.body.appendChild(loadHomePage());
document.body.appendChild(loadFooter());
