function loadHomePage() {
  const content = document.querySelector('#content');

  // Main
  const home = document.createElement('div');
  home.classList.add('home');

  const header = document.createElement('h2');
  header.textContent = 'Welcome to Prime Cuts!';
  home.appendChild(header);

  const paraOne = document.createElement('p');
  paraOne.textContent = `We specialize in serving the finest steaks for those who appreciate high-quality protein. Our menu features a variety of hand-selected, premium cuts of beef, expertly cooked to your preferred level of doneness. Come indulge in the ultimate steak experience at our restaurant.`;
  home.appendChild(paraOne);

  const image = document.createElement('img');
  image.src = '../dist/images/meat.jpg';
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
  rawpixel.textContent = 'Meat image by: Rawpixel';
  footer.appendChild(rawpixel);

  const jcomp = document.createElement('a');
  jcomp.href = 'https://www.freepik.com/author/jcomp';
  jcomp.target = '_blank';
  jcomp.textContent = 'Background by: Jcomp';
  footer.appendChild(jcomp);

  content.appendChild(footer);

  return content;
}

export { loadHomePage };
