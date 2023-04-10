function loadMenuPage() {
  const content = document.querySelector('#content');

  const header = document.createElement('h1');
  header.textContent = 'menu';
  content.appendChild(header);

  const para = document.createElement('p');
  para.textContent = `We are a wonderful restaurant that serves the most delicious space-steaks. 
        Come dine with us and experience our exceptional service and ambiance.`;
  content.appendChild(para);

  return content;
}

export { loadMenuPage };
