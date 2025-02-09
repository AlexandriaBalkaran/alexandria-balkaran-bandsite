const API_KEY = "fedd3493-dc9c-4716-b939-1762172f811d";
const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";

const list = document.querySelector('.show-list');
const showContent = document.querySelector('.show-list__content');
const shows = document.querySelector('.shows');

console.log('this is working');

showsRender();

async function showsRender() {
  try {
    const response = await axios.get(`${BASE_URL}showdates?api_key=${API_KEY}`);
    const showsAll = response.data;
    console.log(showsAll);

    list.innerHTML = '';

    showClass(showsAll);
    
  } catch (e) {
    console.log('function works')
}};


function showClass(showAll) {
  showAll.forEach((showObj) => {
    const show = document.createElement ("div");
    show.classList.add("show");

    const dateSubheader  = document.createElement("p");
    dateSubheader.classList.add('show-list__dateSubheader');
    dateSubheader.textContent = 'DATE';
    show.append(dateSubheader);

    const date  = new Date(showObj.date);
    const dateFormat = date.toLocaleDateString('en-US', {
      weekday: 'short' ,
      month: 'short' ,
      day: '2-digit' ,
      year: 'numeric'
    });
    
    const dateEl = document.createElement('p');
    dateEl.classList.add('show-list__date');
    dateEl.textContent = dateFormat;
    show.append(dateEl);

    const venueSubheader  = document.createElement("p");
    venueSubheader.classList.add('show-list__venueSubheader');
    venueSubheader.textContent = 'VENUE';
    show.append(venueSubheader);

    const venue  = document.createElement("p")
    venue.classList.add('show-list__venue')
    venue.textContent = showObj.place;
    show.append(venue);

    const locationSubheader  = document.createElement("p");
    locationSubheader.classList.add('show-list__locationSubheader');
    locationSubheader.textContent = 'LOCATION';
    show.append(locationSubheader);

    const location = document.createElement("p");
    location.classList.add('show-list__location');
    location.textContent = showObj.location;
    show.append(location);

    const tickets = document.createElement("button");
    tickets.classList.add('show-list__tickets');
    tickets.textContent = 'BUY TICKETS';
    show.append(tickets);

    list.append(show);
  });
}