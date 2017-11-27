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
  })
  var testing = new Vue({
  el: '#films',
  data: {
    films: data
    }
  })
});

var app = new Vue({
  el: '#app',
  data: {
    message: randomGen
    }
})
