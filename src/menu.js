function loadMenuPage() {
  const content = document.querySelector('#content');

  // Main
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const header = document.createElement('h1');
  header.textContent = 'menu';
  menu.appendChild(header);

  const para = document.createElement('p');
  para.textContent = `We are a wonderful restaurant that serves the most delicious space-steaks. 
          Come dine with us and experience our exceptional service and ambiance.`;
  menu.appendChild(para);

  content.appendChild(menu);

  // Footer
  const footer = document.createElement('div');
  footer.classList.add('footer');

  footer.style.width = '100%';

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

  content.appendChild(footer);

  return content;
}

export { loadMenuPage };
