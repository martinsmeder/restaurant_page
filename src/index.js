// TO DO:
// 1. Home, Menu and Contact pages, each inside a separate module (each module will
//    export a function that creates div element, adds content and style, and append
//    it to the DOM)
// 2. Import them to to index.js and write the tab-switching logic there. Event
//    Listeners for each tab that wipes out the current contents and then runs
//    the correct 'tab module' to populate it again

import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

console.log('This seem to be working.');

function loadNavBar() {
  const content = document.querySelector('#content');

  const navBar = document.createElement('div');
  navBar.classList.add('navBar');

  const home = document.createElement('a');
  home.href = '???';
  home.textContent = 'Home';
  navBar.appendChild(home);
  home.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent browser from following link's href
    clearContent();
    document.body.appendChild(loadHomePage());
  });

  const menu = document.createElement('a');
  menu.href = '???';
  menu.textContent = 'Menu';
  navBar.appendChild(menu);
  menu.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent browser from following link's href
    clearContent();
    document.body.appendChild(loadMenuPage());
  });

  const contact = document.createElement('a');
  contact.href = '???';
  contact.textContent = 'Contact';
  navBar.appendChild(contact);
  contact.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent browser from following link's href
    clearContent();
    document.body.appendChild(loadContactPage());
  });

  content.appendChild(navBar);

  return content;
}

function clearContent() {
  const content = document.querySelector('#content');
  const navbar = content.querySelector('.navBar');
  while (content.firstChild && content.firstChild !== navbar) {
    content.removeChild(content.firstChild);
  }
  while (content.lastChild && content.lastChild !== navbar) {
    content.removeChild(content.lastChild);
  }
}

document.body.appendChild(loadNavBar());
document.body.appendChild(loadHomePage());
