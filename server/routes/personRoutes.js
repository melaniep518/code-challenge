const router = require('express').Router();
const models = require('../db/models/index');
const Person = models.Person;
const City = models.City;

const getAllPeople = (req, res) => {
  Person.findAll({
    include: [City]
  })
  .then(people => {
    res.send(people)
  })
  .catch(err => {
    res.status(500).send(err.message);
  })
}

const postNewPerson = (req, res) => {
  City.findOrCreate({
    where: {
      name: req.body.city
    }
  })
  .then(city => {
    return Person.create({
      name: req.body.name,
      favoriteCity: city[0].dataValues.id,
    })
  })
  .then(person => {
    res.send(person)
  })
  .catch(err => {
    res.status(500).send(err.message);
  })
}

const updateAllFavoriteCities = (req, res) => {
  City.findOrCreate({
    where: {
      name: "Brooklyn"
    }
  })
  .then(city => {
    Person.update({
      favoriteCity: city[0].dataValues.id
    }, {
      where: {
        favoriteCity: {
          $ne: city[0].dataValues.id
        }
      }
    })
  })
  .then(() => {
    res.send("You have updated all favorite cities.")
  })
  .catch(err => {
    res.status(500).send(err.message);
  })
}

const getNewestPerson = (req, res) => {
  Person.findOne({
    order: [
      ['createdAt', 'DESC']
    ], 
    include: [City]
  })
  .then(person => {
    res.send(person)
  })
  .catch(err => {
    res.status(500).send(err.message);
  })
}

const getPersonById = (req, res) => {
  Person.findOne({
    where: {
      id: req.params.id
    },
    include: [City]
  })
  .then(person => {
    res.send(person);
  })
  .catch(err => {
    res.status(500).send(err.message);
  })
}

const deletePersonById = (req, res) => {
  Person.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send("You have deleted a person.")
  })
  .catch(err => {
    res.status(500).send(err.message);
  })
}

router.route('/')
  .get(getAllPeople)
  .post(postNewPerson)
  .put(updateAllFavoriteCities)

router.route('/newest')
  .get(getNewestPerson)

router.route('/:id')
  .get(getPersonById)
  .delete(deletePersonById)

module.exports = router;