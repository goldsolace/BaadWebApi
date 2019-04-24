var mongoose = require('mongoose');

var herbloreSchema = new mongoose.Schema({
	_id: {
		type: String, 
		required: true,
	},

	money: {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	runtime: {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	instances: {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	herbs: {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	xp: {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	createdOn: {
		type: Date,
		"default": Date.now
	}
});

var trekRewardSchema = new mongoose.Schema({
	agilityTome : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	firemakingTome : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	}
});

mongoose.model('Herblore', herbloreSchema);
// mongoose.model('TrekReward', trekRewardSchema);