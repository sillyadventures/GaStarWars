var images = ['../images/swbackgrounds/cliffs.jpg',
              '../images/swbackgrounds/cliffsdawn.jpg',
              '../images/swbackgrounds/desert.jpg',
              '../images/swbackgrounds/field.jpg',
              '../images/swbackgrounds/forest.jpg',
              '../images/swbackgrounds/meadow.jpg',
              '../images/swbackgrounds/meadowday.jpg',
              '../images/swbackgrounds/moon.jpg',
              '../images/swbackgrounds/mountains.jpg',
              '../images/swbackgrounds/river.jpg',
              '../images/swbackgrounds/rocky.jpg',
              '../images/swbackgrounds/skyline.jpg',
              '../images/swbackgrounds/skylinesunset.jpg',
              '../images/swbackgrounds/sunnyfield.jpg',
              '../images/swbackgrounds/valley.jpg', ];
$(document).ready(function () {
$('body').css({'background-image': 'url(' + images[Math.floor(Math.random() *
   images.length)] + ')'});

  setTimeout(function(){$('#loading').hide()}, 3000);

});
var vue
var planets = ""
var species = ""
var vehiclesOne = ""
var vehiclesTwo = ""
var starshipsOne = ""
var starshipsTwo = ""

// vue.js start
// fetch movie from api
axios.get(`https://swapi.co/api/films/7/`)
  .then(response => {
    characters = response.data.characters
    // random character on refresh. using math random
    // randomChar = characters[Math.floor(Math.random() * characters.length)]
    //name for testing, below
    randomChar = characters[1]
  })
  .then(data => {
    axios.get(randomChar)
    .then(response => {
      let info = response.data
      planets = info.homeworld
      species = info.species
      vehiclesOne = info.vehicles[0]
      vehiclesTwo = info.vehicles[1]
      starshipsOne = info.starships[0]
      starshipsTwo = info.starships[1]
      vue = new Vue({
        el: '#info',
        data: {
          info: info,
          random: randomChar,
          world: '',
          species: '',
          vehiclesOne: '',
          vehiclesTwo: '',
          starshipsOne: '',
          starshipsTwo: '',
          images: [
            { text: 'https://swapi.co/api/people/1/',
              image: '../images/swcharacters/luke.jpg',
              vehicle: '../images/swvehicles/snowspeeder.jpg',
              vehicleTwo: '../images/swvehicles/speeder.jpg',
              starship: '../images/swvehicles/xwing.jpg',
              starshipTwo: '../images/swvehicles/shuttle.jpg',
              planet: '../images/swplanets/tattoine.jpg',
              weapon: '../images/swweapons/lighticon.png'
            },
            { text: 'https://swapi.co/api/people/3/',
              image: '../images/swcharacters/c3po.jpg',
              planet: '../images/swplanets/naboo.jpg',
              weapon: '../images/swweapons/drone.png',
              friend: '& C-3P)'
            },
            { text: 'https://swapi.co/api/people/5/',
              image: '../images/swcharacters/leia.jpg',
              vehicle: '../images/swvehicles/speeder.jpg',
              planet: '../images/swplanets/alderaan.jpg',
              weapon: '../images/swweapons/gunTwo.png'
            },
            { text: 'https://swapi.co/api/people/13/',
              image: '../images/swcharacters/chew.jpg',
              vehicle: '../images/swvehicles/atst.jpg',
              starship: '../images/swvehicles/falcon.jpg',
              starshipTwo: '../images/swvehicles/shuttle.jpg',
              planet: '../images/swplanets/corellia.jpg',
              weapon: '../images/swweapons/blaster.png'
            },
            { text: 'https://swapi.co/api/people/14/',
              image: '../images/swcharacters/han.jpg',
              starship: '../images/swvehicles/falcon.jpg',
              starshipTwo: '../images/swvehicles/shuttle.jpg',
              planet: '../images/swplanets/moncala.jpg',
              weapon: '../images/swweapons/gunOne.png'
            },
            { text: 'https://swapi.co/api/people/27/',
              image: '../images/swcharacters/ackbar.jpg',
              weapon: '../images/swweapons/blaster.png'
            },
            { text: 'https://swapi.co/api/people/84/',
              image: '../images/swcharacters/finn.jpg',
              weapon: '../images/swweapons/blaster.png'
            },
            { text: 'https://swapi.co/api/people/85/',
              image: '../images/swcharacters/rey.jpeg',
              weapon: '../images/swweapons/lighticon.png'
            },
            { text: 'https://swapi.co/api/people/86/',
              image: '../images/swcharacters/poe.jpg',
              starship: '../images/swvehicles/xwing.jpg',
              weapon: '../images/swweapons/starship.png'
            },
            { text: 'https://swapi.co/api/people/87/',
              image: '../images/swcharacters/bb8.jpg',
              weapon: '../images/swweapons/drone.png'
            },
            { text: 'https://swapi.co/api/people/88/',
              image: '../images/swcharacters/phasma.jpg',
              weapon: '../images/swweapons/blaster.png'
            }
          ]
        }
      })
    })
    .then(() => {
      axios.get(planets)
      .then(response => {
        vue.world = response.data
      })
      axios.get(species)
      .then(response => {
        vue.species = response.data
      })
      axios.get(vehiclesOne)
      .then(response => {
        vue.vehiclesOne = response.data
      })
      axios.get(vehiclesTwo)
      .then(response => {
        vue.vehiclesTwo = response.data
      })
      axios.get(starshipsOne)
      .then(response => {
        vue.starshipsOne = response.data
      })
      axios.get(starshipsTwo)
      .then(response => {
        vue.starshipsTwo = response.data
      })
    })
  })
