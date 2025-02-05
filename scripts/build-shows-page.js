
const list = document.querySelector('.show-list');
const showContent = document.querySelector('.show-list__content');

for (const showObj of shows) {
  const show = document.createElement ("div");
  show.classList.add("show");

  const dateSubheader  = document.createElement("p");
  dateSubheader.classList.add('show-list__dateSubheader');
  dateSubheader.textContent = 'DATE';
  show.append(dateSubheader);

  const date  = document.createElement("p");
  date.classList.add('show-list__date');
  date.textContent = showObj.date;
  show.append(date);

  const venueSubheader  = document.createElement("p");
  venueSubheader.classList.add('show-list__venueSubheader');
  venueSubheader.textContent = 'VENUE';
  show.append(venueSubheader);

  const venue  = document.createElement("p")
  venue.classList.add('show-list__venue')
  venue.textContent = showObj.venue;
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
}