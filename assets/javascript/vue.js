var randomGen = Math.floor((Math.random() * 10) + 1)
fetch(`https://swapi.co/api/people/${randomGen}/`)
  .then(response => response.json())
  .then(data => {
  // Here's a list of repos!
var appInfo = new Vue({
  el: '#appInfo',
  data: {
    infos: data
  }
    // data: {
    //   infos: [
    //   { name: data.name },
    //   { text: data.birth_year },
    //   { text: data.gender },
    //   { text: data.eye_color },
    //   { text: data.hair_color },
    //   { text: data.mass },
    //   { text: data.skin_color },
    //   { text: data.homeworld },
    //   { text: data.url },
    //   { text: data.vehicles },
    //   { text: data.films },
    //   { text: data.starships },
    // ]
    // }
  })
});
fetch('https://swapi.co/api/species/1/')
.then(response => response.json())
.then(data => {
var appSpecies = new Vue({
el: '#appSpecies',
  data: {
    species: [
    { text: data.name },
  ]
  }
})
});
