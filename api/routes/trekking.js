var express = require('express');

var router = express.Router();


var ctrlTrekking = require('../controllers/trekking.controllers.js');

router
	.route('/api/trekking')
	.get(ctrlTrekking.getAllTrekUsers)
	.post(ctrlTrekking.addTrekUser);

router
	.route('/api/trekking/:userId')
	.get(ctrlTrekking.getTrekUser)
	.put(ctrlTrekking.updateTrekUser);


module.exports = router; 