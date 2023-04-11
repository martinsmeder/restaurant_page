function loadContactPage() {
  const content = document.querySelector('#content');

  // Main
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const header = document.createElement('h1');
  header.textContent = 'contact';
  contact.appendChild(header);

  const para = document.createElement('p');
  para.textContent = `We are a wonderful restaurant that serves the most delicious space-steaks. 
          Come dine with us and experience our exceptional service and ambiance.`;
  contact.appendChild(para);

  content.appendChild(contact);

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

export { loadContactPage };
