const navbtn = document.querySelector('.btn');
const navigation = document.querySelector('.navigation');
const closebtn = document.querySelector('.close');
function openMenu() {
  navigation.classList.toggle('open');
  }

function closeMenu() {
  navigation.classList.remove('open');
}
navbtn.addEventListener('click', openMenu);
closebtn.addEventListener('click', closeMenu);

const items = document.querySelectorAll('.nav-list');
  items.forEach(item =>{
    item.addEventListener('click',closeMenu)
  })
  
const guestsArray = [{

  id: 'guest0',
  title: 'Professor Oluwole Soyinka ',
  description: '1986 Nobel prize winner in literature, Playwright and poet',
  About: 'Wole Soyinka (pronounced [wɔlé ʃójĩnká]), is a Nigerian playwright, novelist, poet, and essayist in the English language. ',
  image: './images/Wole-Soyinka-2015.png',
},

{
  id: 'guest1',
  title: 'Dr Kehinde Ayoola ',
  description: 'Senior Lecturer Obafemi Awolowo University, OAU Ile-Ife Nigeria',
  About: 'Kehinde Ayoola (pronounced [kehinday ayola]), is a Nigerian linguist, novelist,  and essayist in the English language. ',
  image: './images/Dr-Kehinde-Ayoola (1).jpg',
},

{
  id: 'guest2',
  title: 'Richard Bona ',
  description: 'Bass player originally from Cameroon, CE0, Richard Bona tours',
  About: ' In 1998, Bona was the Musical Director on Harry Belafontes European Tour, His debut solo album, Scenes from My Life, was released in 1999 He has also been prominently featured in Jaco Pastorius Big Band albums  as well as many other albums by various top-tier jazz musicians',
  image: './images/Bona.jpg',
},

{
  id: 'guest3',
  title: 'Cory Henry ',
  description: 'Cory Henry is an American singer-songwriter, pianist, organist, and record producer',
  About: ' His musical touring began in 2006,  and he has since toured with many mainstream artists, including Bruce Springsteen, Michael McDonald, P. Diddy, Boyz II Men, Kenny Garrett, and The Roots, and gospel artists, among them Israel Houghton, Donnie McClurkin, Kirk Franklin, and Yolanda Adams.',
  image: './images/Cory.png',
},

];

const section3 = document.querySelector('.sec3');

const speaker = document.createElement('div');
speaker.classList.add('features');
const h2 = document.createElement('h2');
h2.classList.add('featuredspeakers');
h2.textContent = 'Featuring';
speaker.appendChild(h2);
section3.appendChild(speaker);

guestsArray.forEach((guest) => {
  const guestdiv = document.querySelector('.guestscontainer');
  const guests = document.createElement('div');
  guests.classList.add('guests');
  const evilJesus = document.createElement('div');
  evilJesus.classList.add('evilJesus');
  const pic = document.createElement('img');
  pic.src = guest.image;
  pic.classList.add('Soyinka');
  const forWS = document.createElement('div');
  forWS.classList.add('forWS');
  const soyinka = document.createElement('div');
  soyinka.setAttribute('id', 'soyinka');
  soyinka.textContent = guest.title;
  const WS = document.createElement('h3');
  WS.classList.add('WS');
  WS.textContent = guest.description;
  const aboutWS = document.createElement('div');
  aboutWS.classList.add('aboutWS');
  aboutWS.textContent = guest.About;

  forWS.appendChild(soyinka);
  forWS.appendChild(WS);
  forWS.appendChild(aboutWS);
  evilJesus.appendChild(pic);
  evilJesus.appendChild(forWS);
  guests.appendChild(evilJesus);
  guestdiv.appendChild(guests);
  section3.appendChild(guestdiv);
});
