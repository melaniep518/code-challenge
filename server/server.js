var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./db/models')
var router = express.Router();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

// ********** Routes here **********
const personRoutes = require('./routes/personRoutes');

app.use('/people', personRoutes)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'))
})

db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || 3000)
})
