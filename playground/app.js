
const request = require('request');

request({
    url : "",
    json : true,

}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined));

}

);