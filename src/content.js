function pageLoad() {
  // <img src="../assets/images/space_steak.png" alt="Space Steak">
  // <h1>Welcome to Space Steaks</h1>
  // <p>We are a wonderful restaurant that serves the most delicious space food. Come dine with us and experience our exceptional service and ambiance.</p>

  const content = document.querySelector('#content');

  const image = document.createElement('img');
  image.src = '../assets/images/space_steak.png';
  content.appendChild(image);

  const header = document.createElement('h1');
  header.textContent = 'Welcome To Space-Steaks!';
  content.appendChild(header);

  const para = document.createElement('p');
  para.textContent = `We are a wonderful restaurant that serves the most delicious space-steaks. 
      Come dine with us and experience our exceptional service and ambiance.`;
  content.appendChild(para);

  return content;
}

export { pageLoad };
