const map = window.L.map('map', {
  scrollWheelZoom: false,
}).setView(
    {
      lat: 55.02850102327697,
      lng: 82.92810886485782,
    },
    15
);

window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
}).addTo(map);

const mainPinIcon = window.L.icon({
  iconUrl: './img/svg/map-pin.svg',
});

const mainPinMarker = window.L.marker(
    {
      lat: 55.02850102327697,
      lng: 82.92810886485782,
    },
    {
      icon: mainPinIcon,
    }
);

mainPinMarker.addTo(map);
