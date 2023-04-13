function loadContactPage() {
  const content = document.querySelector('#content');

  // Main
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  // create the map container div
  const mapDiv = document.createElement('div');
  mapDiv.id = 'map'; // give the container element an ID for Leaflet to use
  // mapDiv.style.height = '400px';
  // mapDiv.style.width = '600px';

  // add map container to the contact div
  contact.appendChild(mapDiv);

  // Hours
  const hours = document.createElement('div');
  const hoursHeading = document.createElement('h2');
  const hoursParaOne = document.createElement('p');
  const hoursParaTwo = document.createElement('p');
  const hoursParaThree = document.createElement('p');
  hoursHeading.textContent = 'Hours';
  hoursParaOne.textContent = 'Tue - Thu, 8 am - 10 pm';
  hoursParaTwo.textContent = 'Fri - Sun, 8 am - 11 pm';
  hoursParaThree.textContent = 'Closed Mondays';
  hours.appendChild(hoursHeading);
  hours.appendChild(hoursParaOne);
  hours.appendChild(hoursParaTwo);
  hours.appendChild(hoursParaThree);
  wrapper.appendChild(hours);

  // Contact Details
  const contactDetails = document.createElement('div');
  const contactHeading = document.createElement('h2');
  const contactParaOne = document.createElement('p');
  const contactParaTwo = document.createElement('p');
  contactHeading.textContent = 'Contact';
  contactParaOne.textContent = '123 456 789';
  contactParaTwo.textContent = 'fake@fakemail.com';
  contactDetails.appendChild(contactHeading);
  contactDetails.appendChild(contactParaOne);
  contactDetails.appendChild(contactParaTwo);
  wrapper.appendChild(contactDetails);

  // Location
  const location = document.createElement('div');
  const locationHeading = document.createElement('h2');
  const locationParaOne = document.createElement('p');
  const locationParaTwo = document.createElement('p');
  locationHeading.textContent = 'Location';
  locationParaOne.textContent = '10 FakeStreet';
  locationParaTwo.textContent = '1000, FakeTown, FakeCountry';
  location.appendChild(locationHeading);
  location.appendChild(locationParaOne);
  location.appendChild(locationParaTwo);
  wrapper.appendChild(location);

  contact.appendChild(wrapper);

  // add everything to the DOM
  content.appendChild(contact);

  // create the map object (after the div has been created and added to the DOM)
  const map = L.map(mapDiv).setView(
    [64.06482878338221, -21.956262782251383],
    13
  );
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

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

  const jcomp = document.createElement('a');
  jcomp.href = 'https://www.freepik.com/author/jcomp';
  jcomp.target = '_blank';
  jcomp.textContent = 'Background by: Jcomp';
  footer.appendChild(jcomp);

  content.appendChild(footer);

  return content;
}

export { loadContactPage };
