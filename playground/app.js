
const request = require('request');
const yargs = require("yargs");
const geocode = require("./geocode/geocode.js");

// console.log(yargs);
const argv = yargs
    .options({
        q: {
            demand: true,
            alias: "city",
            describe: "address for fetch weather",
            string: true,
        }
    })
    .help()
    .alias("help", "h")
    .argv;
    var address = encodeURIComponent(argv.city);
    // console.log(argv);

request({
    url : `http://api.openweathermap.org/data/2.5/weather?q=${address}&APPID=bd5e378503939ddaee76f12ad7a97608`,
    json : true,

}, (error, response, body) => {
    if(error){
        console.log(JSON.stringify(error, undefined, 2));
    }else if(body.cod == 200){        
        // console.log(JSON.stringify(body, undefined, 2));
        console.log(`city: ${body.name}`);
        console.log(`longitude: ${body.coord.lon}`);
        console.log(`latitude: ${body.coord.lat}`);        
        console.log(`weather: ${body.weather[0].description}`);        
    } else if(body.cod == 404){
        console.log("Unable to find address.");
    }
    
}

);