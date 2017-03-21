const express = require('express')
const router = express.Router();
const app = express()
const bodyparser = require('body-parser')
const path = require('path')
const db = require('./db/models')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

/* Routes
 */ 
const personRoutes = require('./routes/personRoutes');

app.use('/people', personRoutes)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'))
})

db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || 3000)
})
