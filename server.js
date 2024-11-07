var express=require('express');
var app=express();

app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views','./views');

var index =require('./index.js');
app.use('/',index);

app.listen(3200);