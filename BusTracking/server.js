const express = require('express');
const jsonWriter = require('./public/scripts/writeToJson.js');
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs')
app.get('/', function (req, res) {
  res.render('index');
});
app.post('/updateJson',function(req,res){
    jsonWriter.writeToJSON();
    res.write("Json updated");
    res.end();
});
app.listen(3000, function () {
  console.log('App listening on port 3000')
});