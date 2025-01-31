const shows = [
    {
      date: "Mon Sept 09 2024",
      venue: "Ronald Lane",
      location: "San Francisco, CA",
    },
    {
      date: "Tues Sept 17 2024",
      venue: "Pier 3 East",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Oct 12 2024",
      venue: "View Lounge",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Nov 16 2024",
      venue: "Hyatt Agency",
      location: "San Francisco, CA",
    },
    {
      date: "Fri Nov 29 2024",
      venue: "Moscow Center",
      location: "San Francisco, CA",
    },
    {
      date: "Wed Dec 18 2024",
      venue: "Press Club",
      location: "San Francisco, CA",
    },
  ];



// Notes
const list = document.querySelector('.show-list');
const showContent = document.querySelector('.show-list__content')

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

// //   Notes
// const list = document.getElementById('show-list')

// for (let i = 0; i < shows.length; i++) {
//     const showObj = shows[i]
// const show = document.createElement ("div");
// show.classList.add("show");
// show.textContent = showObj.venue + "-" + showObj.date;
// list.appendChild(show);
// }

// Notes
// const list = document.getElementById('show-list')

// for (let i = 0; i < shows.length; i++) {
//   const showObj = shows[i]

//   const show = document.createElement ("div");
//   show.classList.add("show");

//   show.textContent = showObj.venue + showObj.date;
// }