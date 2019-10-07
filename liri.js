let action = process.argv[2]
let value = process.argv.slice(3)
const axios = require('axios')
const spotify = require('node-spotify-api')
const moment = require('moment')


if(action === "song"){
    console.log('searching for song', value)
   spotify
   .get('https://api.spotify.com/v1/tracks/q=' + value)
   .then(function(data){
       console.log(data)
   })
   .catch(function(err){
       console.log('error' + err)
   })
}

if(action === "band"){
    console.log('searching for band', value)
    let URL = "https://rest.bandsintown.com/artists/"+ value.join('+') +"/events?app_id=codingbootcamp"
    axios.get(URL)
    .then(function(response){
        console.log('Venue:', response.data[0].venue.name)
        console.log('Location:', response.data[0].venue.city,',', response.data[0].venue.region)
        console.log('Date:', moment(response.data[0].datetime).format('MM/DD/YYYY'))

    })
    .catch(function(err){
        if(err){
            console.log(err)
        }
    })
}

if(action === "movie"){
    console.log('searching for movie', value)
    URL = "http://www.omdbapi.com/?t="+value.join('+')+"&y=&plot=short&apikey=92262c7b"
    axios.get(URL)
    .then(function(response){
        console.log('Title:', response.data.Title)
        console.log('Released:', response.data.Released)
        console.log('IMDB Rating:', response.data.imdbRating)
        console.log('Rotten Tomatoes Rating:', response.data.Ratings[1].Value)
        console.log('Country:', response.data.Country)
        console.log('Language:', response.data.Language)
        console.log('Plot:', response.data.Plot)
        console.log('Actors:' , response.data.Actors)


    })
    .catch(function(err){
        if(err){
            console.log(err)
        }
    })
}    