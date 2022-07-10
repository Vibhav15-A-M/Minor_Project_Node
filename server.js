require('./models/db');

const express = require('express');
const path = require('path');
const ejs =  require('ejs');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const studentController = require('./controllers/studentController');

var auth = false;

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('view engine','ejs');
// app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

// -----------------------------------------

app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home.ejs");
});

app.post("/",function(req,res){
  auth = false;
  res.render("home.ejs");
});

app.post("/about",function(req,res){
  res.render("about.ejs");
});
app.get("/about",function(req,res){
  res.render("about.ejs");
});

app.get("/life-at-niemh",function(req,res){
  res.render("life-at-niemh.ejs");
});

app.get("/login",function(req,res){

  res.render("login.ejs");
});

app.post("/login",function(req,res){
  auth = true;
  res.redirect("/admin");

});


app.use('/', studentController);
