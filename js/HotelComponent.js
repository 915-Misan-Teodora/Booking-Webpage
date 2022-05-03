// Using DOM selector to populate Hotel Component

// sample HTTP response for GET request
const hotel = {
  _id: '1',
  name: 'Ramada Plaza Bucharest',
  image: 'https://www.hotel-board.com/picture/ramada-plaza-bucharest-hotel-1458758.jpg',
  description: 'Our Ramada Plaza Bucharest Convention Center hotel is the perfect place to relax and refresh during your stay',
  facilities: 'Non-smoking rooms, Facilities for disable guests, Free Wifi, Family rooms',
  pricePerNight: '100 euro',
  review: 'Very good',
};

function hotelData() {
  return `<h1 class="center teal-text"> ${hotel.name} </h1>
  <section id="informations" class="section section-informations scrollspy">
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img class="materialboxed responsive-img" src=${hotel.image} alt="">
              <span class="card-title">${hotel.name}</span>
            </div>
            <div class="card-content">
              <p>${hotel.description}</p>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <ul class="collection with-header">
            <li class="collection-header">
              <h4>Description</h4>
            </li>
            <li class="collection-item">Facilities ~ ${hotel.facilities}</li>
            <li class="collection-item">Price/Night ~ ${hotel.pricePerNight}</li>
            <li class="collection-item">Review ~ ${hotel.review}</li>
            <li><a class="waves-effect waves-light teal white-text btn">Book a room</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>`;
}

const hotelLoader = hotelData();
document.getElementById('hotelSection').insertAdjacentHTML("afterbegin", hotelLoader);
