var express = require('express');
var router = express.Router();

const low = require('lowdb');
const db = low(__dirname + '/../data/db.json')
const defaultData = require('../data/default-data.json')
db.defaults(defaultData).write()
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
