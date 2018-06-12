const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const APP_TITLE = "valStock";


const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");



app.set('view engine', 'hbs');



app.use(express.static(__dirname + "/public"));

app.get('/', function(req,res){
  res.render("home.hbs",{
    pageTitle: APP_TITLE
  })

});

app.get('/markets', function(req,res){
  res.render("markets.hbs",{
    pageTitle: APP_TITLE,
    subTitle: "markets"
  })
})

app.get('/screener', function(req,res){
  res.render("screener.hbs",{
    pageTitle: APP_TITLE,
    subTitle: "screener"
  })
})

app.listen(port, function(){
  console.log("Server is up on port " + port);
})
