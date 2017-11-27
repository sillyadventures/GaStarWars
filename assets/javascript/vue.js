var randomGen = Math.floor((Math.random() * 10) + 1)
axios.get(`https://swapi.co/api/films/7/`)
  .then(response => {
      // console.log(response.data.characters)
      characters = response.data.characters
      // console.log(characters)
      randomChar = characters[Math.floor(Math.random() * characters.length)]
      console.log(randomChar)
    })
  .then(data => {
  axios.get(`${randomChar}`)
    .then(response => {
      current = response.data
  })
  .then(data => {
  var now = new Vue({
    el: '#current',
    data: {
      current: current
    }
    })
  })
})
