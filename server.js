const express = require('express');
const jsonWriter = require('./public/scripts/writeToJson.js');
const dbUpdater = require('./public/scripts/updateDatabase.js');
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs')
app.get('/', function (
        req, res) {
  res.render('index');
});

app.post('/updateJson',function(req,res){
    jsonWriter.writeToJSON();
    res.write("Json updated");
    res.end();
});

app.post('/deleteRow',function(req,res){
    dbUpdater.insertRow();
});

app.post('/insertRow',function(req,res){
    dbUpdater.insertRow();
});

app.listen(3000, function () {
  console.log('App listening on port 3000')
});