function loadHomePage() {
  const content = document.querySelector('#content');

  const image = document.createElement('img');
  image.src = '../assets/images/meat.jpg';
  content.appendChild(image);

  const header = document.createElement('h1');
  header.textContent = 'home';
  content.appendChild(header);

  const para = document.createElement('p');
  para.textContent = `We are a wonderful restaurant that serves the most delicious space-steaks. 
      Come dine with us and experience our exceptional service and ambiance.`;
  content.appendChild(para);

  return content;
}

export { loadHomePage };
