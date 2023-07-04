const officeList = [
    { "name" : "Head office",
      "location" : [19.9911053,73.7210797] 
    },
    { "name" : "Sales office",
    "location" : [28.633154, 77.215505] 
    },
    { "name" : "Regional office",
    "location" : [18.9699559,72.8030121] 
    }
]

var map = L.map('map') // create map using leaflet
          .setView([19.9911053,73.7210797] // set lat,long
            , 4); // set zoom levelt

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(map);



officeList.map(office => {
    // add location on map
L.marker(office.location).addTo(map) 
// add popup to maker
    .bindPopup(office.name) 
})