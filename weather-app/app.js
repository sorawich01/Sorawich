const request = require('request')


// const url = 'http://api.weatherstack.com/current?access_key=bffc982b67d9a915d42cdfe9902a4893&query=37.8267,-122.4233&units=m'
// request({ url: url,json: true }, (error, response) => {
//     const temperature = response.body.current.temperature
//     const feelslike = response.body.current.feelslike
//     const weather_descriptions = response.body.current.weather_descriptions
//     // console.log(temperature)
//     // console.log(feelslike)
//     console.log(weather_descriptions + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.')
// })



// usl worng query
// const url = 'http://api.weatherstack.com/current?access_key=bffc982b67d9a915d42cdfe9902a4893&query=&units=m'
// request({ url: url,json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     }else if (response.body.error){
//             console.log("Unable to find location")
//     }else {
//         const temperature = response.body.current.temperature
//         const feelslike = response.body.current.feelslike
//         const weather_descriptions = response.body.current.weather_descriptions
//         console.log(weather_descriptions + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.')
//     }})

// const geocodeurl = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic29yYXdpY2giLCJhIjoiY2tiMGxidHo3MGFjbDJ4bGdmZmJ2emxyMCJ9.K0bBkTxYuGP7EABoFrRS0Q&limit=1'
// request({ url: geocodeurl,json: true }, (error, response) => {
//     const center = response.body.features[0].center
//     console.log('latitude = ' + center[0] + ' longtitude = ' + center[1])
// })


// geocode wrong url
const geocodeurl = 'http://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1Ijoic29yYXdpY2giLCJhIjoiY2tiMGxidHo3MGFjbDJ4bGdmZmJ2emxyMCJ9.K0bBkTxYuGP7EABoFrRS0Q&limit=1'

request({ url: geocodeurl,json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    }else if(response.body.features.length === 0){
        console.log("Unable to find location. Try another search.")
    }else{
        const center = response.body.features[0].center
        console.log('latitude = ' + center[0] + ' longtitude = ' + center[1])
    }
})




    

