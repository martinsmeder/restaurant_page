(() => {
  'use strict';
  function e() {
    const e = document.querySelector('#content'),
      t = document.createElement('div');
    t.classList.add('home');
    const n = document.createElement('h2');
    (n.textContent = 'Welcome to Prime Cuts!'), t.appendChild(n);
    const a = document.createElement('p');
    (a.textContent =
      'We specialize in serving the finest steaks for those who appreciate high-quality protein. Our menu features a variety of hand-selected, premium cuts of beef, expertly cooked to your preferred level of doneness. Come indulge in the ultimate steak experience at our restaurant.'),
      t.appendChild(a);
    const o = document.createElement('img');
    (o.src = 'images/meat.jpg'), t.appendChild(o);
    const d = document.createElement('p');
    (d.textContent = 'Come visit us or order online!'),
      t.appendChild(d),
      e.appendChild(t);
    const i = document.createElement('div');
    i.classList.add('footer');
    const c = document.createElement('a');
    (c.href = 'https://github.com/martinsmeder'),
      (c.target = '_blank'),
      (c.textContent = 'Coded by: Martin Smeder'),
      i.appendChild(c);
    const r = document.createElement('a');
    (r.href = 'https://www.freepik.com/author/rawpixel-com'),
      (r.target = '_blank'),
      (r.textContent = 'Meat image by: Rawpixel'),
      i.appendChild(r);
    const l = document.createElement('a');
    return (
      (l.href = 'https://www.freepik.com/author/jcomp'),
      (l.target = '_blank'),
      (l.textContent = 'Background by: Jcomp'),
      i.appendChild(l),
      e.appendChild(i),
      e
    );
  }
  function t(e) {
    document.querySelectorAll('.navBar a').forEach((e) => {
      e.classList.remove('active');
    }),
      document.querySelector(`#${e}`).classList.add('active');
  }
  function n() {
    const e = document.querySelector('#content'),
      t = document.querySelector('.navBar');
    for (; e.firstChild && e.firstChild !== t; ) e.removeChild(e.firstChild);
    for (; e.lastChild && e.lastChild !== t; ) e.removeChild(e.lastChild);
  }
  document.body.appendChild(
    (function () {
      const a = document.querySelector('#content'),
        o = document.createElement('div');
      o.classList.add('navBar');
      const d = document.createElement('h1');
      (d.textContent = 'Prime Cuts'), o.appendChild(d);
      const i = document.createElement('a');
      (i.href = '#'),
        (i.textContent = 'Home'),
        (i.id = 'home-link'),
        i.addEventListener('click', () => {
          n(), document.body.appendChild(e()), t('home-link');
        }),
        o.appendChild(i);
      const c = document.createElement('a');
      (c.href = '#'),
        (c.textContent = 'Menu'),
        (c.id = 'menu-link'),
        c.addEventListener('click', () => {
          n(),
            document.body.appendChild(
              (function () {
                const e = document.querySelector('#content'),
                  t = document.createElement('div');
                t.classList.add('menu');
                const n = [
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
                for (let e = 0; e < n.length; e++) {
                  const a = n[e],
                    o = document.createElement('div');
                  t.appendChild(o);
                  const d = document.createElement('h2');
                  (d.textContent = a.title), o.appendChild(d);
                  const i = document.createElement('p');
                  (i.textContent = a.ingredients), o.appendChild(i);
                }
                e.appendChild(t);
                const a = document.createElement('div');
                a.classList.add('footer'), (a.style.width = '100%');
                const o = document.createElement('a');
                (o.href = 'https://github.com/martinsmeder'),
                  (o.target = '_blank'),
                  (o.textContent = 'Coded by: Martin Smeder'),
                  a.appendChild(o);
                const d = document.createElement('a');
                (d.href = 'https://www.freepik.com/author/rawpixel-com'),
                  (d.target = '_blank'),
                  (d.textContent = 'Images by: Rawpixel'),
                  a.appendChild(d);
                const i = document.createElement('a');
                return (
                  (i.href = 'https://www.freepik.com/author/jcomp'),
                  (i.target = '_blank'),
                  (i.textContent = 'Background by: Jcomp'),
                  a.appendChild(i),
                  e.appendChild(a),
                  e
                );
              })()
            ),
            t('menu-link');
        }),
        o.appendChild(c);
      const r = document.createElement('a');
      return (
        (r.href = '#'),
        (r.textContent = 'Contact'),
        (r.id = 'contact-link'),
        r.addEventListener('click', () => {
          n(),
            document.body.appendChild(
              (function () {
                const e = document.querySelector('#content'),
                  t = document.createElement('div');
                t.classList.add('contact');
                const n = document.createElement('div');
                n.classList.add('wrapper');
                const a = document.createElement('div');
                (a.id = 'map'), t.appendChild(a);
                const o = document.createElement('div'),
                  d = document.createElement('h2'),
                  i = document.createElement('p'),
                  c = document.createElement('p'),
                  r = document.createElement('p');
                (d.textContent = 'Hours'),
                  (i.textContent = 'Tue - Thu, 8 am - 10 pm'),
                  (c.textContent = 'Fri - Sun, 8 am - 11 pm'),
                  (r.textContent = 'Closed Mondays'),
                  o.appendChild(d),
                  o.appendChild(i),
                  o.appendChild(c),
                  o.appendChild(r),
                  n.appendChild(o);
                const l = document.createElement('div'),
                  p = document.createElement('h2'),
                  m = document.createElement('p'),
                  s = document.createElement('p');
                (p.textContent = 'Contact'),
                  (m.textContent = '123 456 789'),
                  (s.textContent = 'fake@fakemail.com'),
                  l.appendChild(p),
                  l.appendChild(m),
                  l.appendChild(s),
                  n.appendChild(l);
                const h = document.createElement('div'),
                  u = document.createElement('h2'),
                  C = document.createElement('p'),
                  f = document.createElement('p');
                (u.textContent = 'Location'),
                  (C.textContent = '10 FakeStreet'),
                  (f.textContent = '1000, FakeTown, FakeCountry'),
                  h.appendChild(u),
                  h.appendChild(C),
                  h.appendChild(f),
                  n.appendChild(h),
                  t.appendChild(n),
                  e.appendChild(t);
                const g = L.map(a).setView(
                  [64.06482878338221, -21.956262782251383],
                  13
                );
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: 19,
                  attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                }).addTo(g);
                const b = document.createElement('div');
                b.classList.add('footer');
                const k = document.createElement('a');
                (k.href = 'https://github.com/martinsmeder'),
                  (k.target = '_blank'),
                  (k.textContent = 'Coded by: Martin Smeder'),
                  b.appendChild(k);
                const w = document.createElement('a');
                (w.href = 'https://www.freepik.com/author/rawpixel-com'),
                  (w.target = '_blank'),
                  (w.textContent = 'Images by: Rawpixel'),
                  b.appendChild(w);
                const E = document.createElement('a');
                return (
                  (E.href = 'https://www.freepik.com/author/jcomp'),
                  (E.target = '_blank'),
                  (E.textContent = 'Background by: Jcomp'),
                  b.appendChild(E),
                  e.appendChild(b),
                  e
                );
              })()
            ),
            t('contact-link');
        }),
        o.appendChild(r),
        a.appendChild(o),
        a
      );
    })()
  ),
    document.body.appendChild(e()),
    t('home-link'),
    console.log('This seem to be working.');
})();
