var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
  
app.get('/', function(req, res){
    console.log('petición get root');
    //res.send('hola navegador');
    res.sendfile(__dirname + '/index.html');
});

app.post('/email', function(req, res){
    console.log('req', req.body);
    console.log('req', req.body.email);
    console.log('req', req.body.text);
    res.send('Parametros');
});

app.listen(3000, function(){
    console.log('Mi servidor');
});