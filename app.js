
const express = require("express");
const app = express();
const request = require('request')
var cron = require('node-cron');


function runRequest() {
        request({
        url: "https://happymovieapp.onrender.com/",
        method: "GET",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    },function(error, response, body){
        if(!error && response.statusCode == 200){
            console.log('sucess!'+body);
        }else{
            console.log('error' + response.statusCode);
        }
    });
}

var num = 0
  
var myInterval =  setInterval(() => {
  
   // Increment post tracker
   num++
   console.log('Wait for 1 minute...')
   runRequest()

}, 60000)

function stop() {
    clearInterval(myInterval);
}
function start() {
    myInterval();
}
