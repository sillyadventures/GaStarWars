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
});
var vue
var planets = ""
var species = ""
var vehiclesOne = ""

// vue.js start
// fetch movie from api
axios.get(`https://swapi.co/api/films/7/`)
  .then(response => {
    characters = response.data.characters
    // random character on refresh. using math random
    // randomChar = characters[Math.floor(Math.random() * characters.length)]
    randomChar = characters[0]
  })
  .then(data => {
    axios.get(randomChar)
    .then(response => {
      let info = response.data
      planets = info.homeworld
      species = info.species
      vehiclesOne = info.vehicles[0]
      vue = new Vue({
        el: '#info',
        data: {
          info: info,
          random: randomChar,
          world: '',
          species: '',
          vehiclesOne: '',
          images: [
            { text: 'https://swapi.co/api/people/1/',
              image: '/assets/images/swcharacters/luke.jpg'
            },
            { text: 'https://swapi.co/api/people/3/',
              image: '/assets/images/swcharacters/c3po.jpg'
            },
            { text: 'https://swapi.co/api/people/5/',
              image: '/assets/images/swcharacters/leia.jpg'
            },
            { text: 'https://swapi.co/api/people/13/',
              image: '/assets/images/swcharacters/chew.jpg'
            },
            { text: 'https://swapi.co/api/people/14/',
              image: '/assets/images/swcharacters/han.jpg'
            },
            { text: 'https://swapi.co/api/people/27/',
              image: '/assets/images/swcharacters/ackbar.jpg'
            },
            { text: 'https://swapi.co/api/people/84/',
              image: '/assets/images/swcharacters/finn.jpg'
            },
            { text: 'https://swapi.co/api/people/85/',
              image: '/assets/images/swcharacters/rey.jpeg'
            },
            { text: 'https://swapi.co/api/people/86/',
              image: '/assets/images/swcharacters/poe.jpg'
            },
            { text: 'https://swapi.co/api/people/87/',
              image: '/assets/images/swcharacters/bb8.jpg'
            },
            { text: 'https://swapi.co/api/people/88/',
              image: '/assets/images/swcharacters/phasma.jpg'
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
    })
  })
