
var mongoose = require('mongoose');
var Herblore = mongoose.model('Herblore');

module.exports.getAllHerbloreUsers = function (req, res) {
	Herblore
		.find()
		.exec(function (err, herbloreUsers) {
			if (err) {
				console.log("Error finding Users");
				res
					.status(500)
					.json({
						"message" : "Error finding Users"
					});
			}
			else {
				console.log("Found Users", herbloreUsers.length);
				res
					.json(herbloreUsers);
			}
		});
};

module.exports.getHerbloreUser = function (req, res) {
	var userId = req.params.userId;
	console.log("Get the username: " + userId);

	Herblore
		.findById(userId)
		.exec(function (err, doc) {
			var response = {
				status: 200,
				message: doc
			};
			if (err) {
				console.log("Error finding username");
				response.status = 500;
				response.message = "Error finding username";
			} else if (!doc) {
				response.status = 404;
				response.message = {
					"message": "Username not found"
				};
			}
			res
				.status(response.status)
				.json(response.message);

		});
};

module.exports.addHerbloreUser = function (req, res) {
	console.log(req.body);

	Herblore
		.create({
			_id: req.body.username,
			money: req.body.money,
			runtime: req.body.runtime,
			herbs: req.body.herbs,
			xp: req.body.xp,
			instances: req.body.instances,
		}, function (err, trekUser) {
			if (err) {
				console.log("Error creating new herblore user");
				res
					.status(400)
					.json();
			} else {
				console.log("Herblore user created ", herbloreUsers);
				res
					.status(201)
					.json(herbloreUsers);
			}
		});
};

module.exports.updateHerbloreUser = function (req, res) {
	var userId = req.params.userId;
	console.log("Update the username: " + userId);

	Herblore
		.findById(userId)
		.exec(function (err, doc) {
			var response = {
				status: 200,
				message: doc
			};
			if (err) {
				console.log("Error finding Trek user");
				response.status = 500;
				response.message = "Error finding Trek user";
			} else if (!doc) {
				Trek
					.create({
						_id: userId,
						money: req.body.money,
						runtime: req.body.runtime,
						herbs: req.body.herbs,
						xp: req.body.xp,
						instances: req.body.instances,
					}, function (err, trekUser) {
						if (err) {
							console.log("Error creating new herblore user");
							res
								.status(400)
								.json({
									"message": userId + " herblore user could not be created."
								});
						} else {
							console.log("Trek user created ", herbloreUser);
							res
								.status(201)
								.json({
									"message": "Herblore user has been created."
								});
						}
					});
				return;
			}
			if (response.status !== 200) {
				res
					.status(response.status)
					.json(response.message);
			} else {
				doc.money += req.body.money;
				doc.runtime  += req.body.runtime;
				doc.herbs += req.body.herbs;
				doc.xp += req.body.xp;
				doc.instances += req.body.instances;
				// for (var key in req.body.rewards) {
				// 	if (req.body.rewards.hasOwnProperty(key) && doc.rewards.hasOwnProperty(key)) {
				// 		doc.rewards[key] += req.body.rewards[key];
				// 		doc.markModified('rewards.'+key);
				//     }
				// }
				doc.save(function (err, herbloreUserUpdated) {
					if (err) {
						res
							.status(500)
							.json({
								"message": userId + " updated failed."
							});
					} else {
						res
							.status(204)
							.json({
								"message": userId + " successfully updated."
							});
					}
					
				});
			}
		});
};  