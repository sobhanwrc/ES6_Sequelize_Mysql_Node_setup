import express from 'express'
import routes from './src/routes/CustomerRoute'

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const db = require('./config/db');

db.sequelize.sync().then(() => {
  console.log('database connected');
});

routes(app)
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})