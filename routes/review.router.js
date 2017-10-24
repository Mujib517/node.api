var express = require('express');
var router = express.Router();
var reviewCtrl = require('../controllers/review.ctrl');

router.post('/', reviewCtrl.add);

module.exports = router;