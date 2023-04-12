function loadMenuPage() {
  const content = document.querySelector('#content');

  // Main
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // Define an array of objects representing each dish
  const dishes = [
    {
      title: 'Filet Mignon',
      ingredients:
        'High-grade beef tenderloin seasoned with salt, pepper, and butter.',
    },
    {
      title: 'Ribeye Steak',
      ingredients:
        'Well-marbled beef rib seasoned with garlic, thyme, and rosemary.',
    },
    {
      title: 'T-Bone Steak',
      ingredients:
        'A generous cut of beef tenderloin and strip steak seasoned with sea salt, black pepper, and butter.',
    },
    {
      title: 'New York Strip Steak',
      ingredients:
        'A thick-cut beef strip steak seasoned with garlic, salt, and pepper, served with roasted potatoes.',
    },
    {
      title: 'Porterhouse Steak',
      ingredients:
        'A mammoth cut of beef containing both the tenderloin and strip steak, seasoned with a blend of herbs and garlic.',
    },
    {
      title: 'Tomahawk Steak',
      ingredients:
        'A massive cut of beef rib with the bone left in, seasoned with salt, pepper, and butter.',
    },
    {
      title: 'Prime Rib',
      ingredients:
        'A succulent beef roast seasoned with garlic, rosemary, and thyme, served with au jus.',
    },
    {
      title: 'Wagyu Beef Steak',
      ingredients:
        "A premium Japanese beef steak with a high marbling score, seasoned simply with salt and pepper to let the meat's flavor shine.",
    },
  ];

  // Loop through the dishes array and create a div, h2, and p element for each dish
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i]; // Get current dish object from array

    const div = document.createElement('div');
    menu.appendChild(div);

    const title = document.createElement('h2');
    title.textContent = dish.title;
    div.appendChild(title);

    const para = document.createElement('p');
    para.textContent = dish.ingredients;
    div.appendChild(para);
  }

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
