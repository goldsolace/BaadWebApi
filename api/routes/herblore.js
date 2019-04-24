var express = require('express');

var router = express.Router();


var ctrlHerblore = require('../controllers/herblore.controllers.js');

router
	.route('/api/herblore')
	.get(ctrlHerblore.getAllHerbloreUsers)
	.post(ctrlHerblore.addHerbloreUser);

router
	.route('/api/herblore/:userId')
	.get(ctrlHerblore.getHerbloreUser)
	.put(ctrlHerblore.updateHerbloreUser);


module.exports = router; 