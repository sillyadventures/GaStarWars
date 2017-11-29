var images = ['/assets/images/swbackgrounds/cliffs.jpg',
              '/assets/images/swbackgrounds/cliffsdawn.jpg',
              '/assets/images/swbackgrounds/desert.jpg',
              '/assets/images/swbackgrounds/field.jpg',
              '/assets/images/swbackgrounds/forest.jpg',
              '/assets/images/swbackgrounds/meadow.jpg',
              '/assets/images/swbackgrounds/meadowday.jpg',
              '/assets/images/swbackgrounds/moon.jpg',
              '/assets/images/swbackgrounds/mountains.jpg',
              '/assets/images/swbackgrounds/river.jpg',
              '/assets/images/swbackgrounds/rocky.jpg',
              '/assets/images/swbackgrounds/skyline.jpg',
              '/assets/images/swbackgrounds/skylinesunset.jpg',
              '/assets/images/swbackgrounds/sunnyfield.jpg',
              '/assets/images/swbackgrounds/valley.jpg', ];
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
              image: '/assets/images/swcharacters/luke.jpg',
              vehicle: '/assets/images/swvehicles/snowspeeder.jpg',
              vehicleTwo: '/assets/images/swvehicles/speeder.jpg',
              starship: '/assets/images/swvehicles/xwing.jpg',
              starshipTwo: '/assets/images/swvehicles/shuttle.jpg',
              planet: '/assets/images/swplanets/tattoine.jpg',
              weapon: '/assets/images/swweapons/lighticon.png'
            },
            { text: 'https://swapi.co/api/people/3/',
              image: '/assets/images/swcharacters/c3po.jpg',
              planet: '/assets/images/swplanets/naboo.jpg',
              weapon: '/assets/images/swweapons/drone.png',
              friend: '& C-3P)'
            },
            { text: 'https://swapi.co/api/people/5/',
              image: '/assets/images/swcharacters/leia.jpg',
              vehicle: '/assets/images/swvehicles/speeder.jpg',
              planet: '/assets/images/swplanets/alderaan.jpg',
              weapon: '/assets/images/swweapons/gunTwo.png'
            },
            { text: 'https://swapi.co/api/people/13/',
              image: '/assets/images/swcharacters/chew.jpg',
              vehicle: '/assets/images/swvehicles/atst.jpg',
              starship: '/assets/images/swvehicles/falcon.jpg',
              starshipTwo: '/assets/images/swvehicles/shuttle.jpg',
              planet: '/assets/images/swplanets/corellia.jpg',
              weapon: '/assets/images/swweapons/blaster.png'
            },
            { text: 'https://swapi.co/api/people/14/',
              image: '/assets/images/swcharacters/han.jpg',
              starship: '/assets/images/swvehicles/falcon.jpg',
              starshipTwo: '/assets/images/swvehicles/shuttle.jpg',
              planet: '/assets/images/swplanets/moncala.jpg',
              weapon: '/assets/images/swweapons/gunOne.png'
            },
            { text: 'https://swapi.co/api/people/27/',
              image: '/assets/images/swcharacters/ackbar.jpg',
              weapon: '/assets/images/swweapons/blaster.png'
            },
            { text: 'https://swapi.co/api/people/84/',
              image: '/assets/images/swcharacters/finn.jpg',
              weapon: '/assets/images/swweapons/blaster.png'
            },
            { text: 'https://swapi.co/api/people/85/',
              image: '/assets/images/swcharacters/rey.jpeg',
              weapon: '/assets/images/swweapons/lighticon.png'
            },
            { text: 'https://swapi.co/api/people/86/',
              image: '/assets/images/swcharacters/poe.jpg',
              starship: '/assets/images/swvehicles/xwing.jpg',
              weapon: '/assets/images/swweapons/starship.png'
            },
            { text: 'https://swapi.co/api/people/87/',
              image: '/assets/images/swcharacters/bb8.jpg',
              weapon: '/assets/images/swweapons/drone.png'
            },
            { text: 'https://swapi.co/api/people/88/',
              image: '/assets/images/swcharacters/phasma.jpg',
              weapon: '/assets/images/swweapons/blaster.png'
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
