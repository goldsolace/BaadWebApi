var mongoose = require('mongoose');

var trekSchema = new mongoose.Schema({
	_id: {
		type: String, 
		required: true,
	},
	treks: {
		type: Number,
		required: true,
		min: 0,
		default: 0
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
	rewards: {
		type: Object,
		required: true,
		of: trekRewardSchema,
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
	},
	fishingTome : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	miningTome : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	slayerTome : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	thievingTome : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	woodcuttingTome : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	pureEssence : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	bowString : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	silverBar : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	coal : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	ironOre : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	tarromin : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	harralander : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	toadflax : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	watermelonSeeds : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	rawLobsters : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	pureEssence : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	},
	nailBeastNails : {
		type: Number,
		required: true,
		min: 0,
		default: 0
	}
});

mongoose.model('Trek', trekSchema);
mongoose.model('TrekReward', trekRewardSchema);