function loadHomePage() {
  const content = document.querySelector('#content');

  // Main
  const home = document.createElement('div');
  home.classList.add('home');

  const header = document.createElement('h1');
  header.textContent = 'Welcome to Prime Cuts!';
  home.appendChild(header);

  const paraOne = document.createElement('p');
  paraOne.textContent = `We are a wonderful restaurant that serves the most delicious steaks. 
          Come dine with us and experience our exceptional service and ambiance.`;
  home.appendChild(paraOne);

  const image = document.createElement('img');
  image.src = '../assets/images/meat.jpg';
  home.appendChild(image);

  const paraTwo = document.createElement('p');
  paraTwo.textContent = 'Come visit us or order online!';
  home.appendChild(paraTwo);

  content.appendChild(home);

  // Footer
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

  content.appendChild(footer);

  return content;
}

export { loadHomePage };
