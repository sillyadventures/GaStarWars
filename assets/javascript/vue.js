axios.get(`https://swapi.co/api/films/7/`)
  .then(response => {
      characters = response.data.characters
      randomChar = characters[Math.floor(Math.random() * characters.length)]
  })
  .then(data => {
    axios.get(`${randomChar}`)
    .then(response => {
      console.log(characters)
      current = response.data
    })
  .then(data => {
    var now = new Vue({
    el: '#current',
    data: {
      current: current,
      random: randomChar,
      images: [
        { text: 'https://swapi.co/api/people/1/',
          image: '/assets/images/swcharacters/luke.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/3/',
          image: '/assets/images/swcharacters/c3po.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/5/',
          image: '/assets/images/swcharacters/leia.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/13/',
          image: '/assets/images/swcharacters/chew.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/14/',
          image: '/assets/images/swcharacters/han.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/27/',
          image: '/assets/images/swcharacters/ackbar.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/84/',
          image: '/assets/images/swcharacters/finn.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/85/',
          image: '/assets/images/swcharacters/rey.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/86/',
          image: '/assets/images/swcharacters/poe.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/87/',
          image: '/assets/images/swcharacters/bb8.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        },
        { text: 'https://swapi.co/api/people/88/',
          image: '/assets/images/swcharacters/phasma.jpg',
          background: '/assets/images/swbackgrounds/cliffs.jpg'
        }
          ]
        }
      })
    })
  })
