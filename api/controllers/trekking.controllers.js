
var mongoose = require('mongoose');
var Trek = mongoose.model('Trek');

module.exports.getAllTrekUsers = function (req, res) {
	Trek
		.find()
		.exec(function (err, trekUsers) {
			if (err) {
				console.log("Error finding Users");
				res
					.status(500)
					.json({
						"message" : "Error finding Users"
					});
			}
			else {
				console.log("Found Users", trekUsers.length);
				res
					.json(trekUsers);
			}
		});
};

module.exports.getTrekUser = function (req, res) {
	var userId = req.params.userId;
	console.log("Get the username: " + userId);

	Trek
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

module.exports.addTrekUser = function (req, res) {
	console.log(req.body);

	Trek
		.create({
			_id: req.body.username,
			treks: req.body.treks,
			money: req.body.money,
			runtime: req.body.runtime,
			instances: req.body.instances,
			rewards: req.body.rewards,
		}, function (err, trekUser) {
			if (err) {
				console.log("Error creating new trek user");
				res
					.status(400)
					.json();
			} else {
				console.log("Trek user created ", trekUser);
				res
					.status(201)
					.json(trekUser);
			}
		});
};

module.exports.updateTrekUser = function (req, res) {
	var userId = req.params.userId;
	console.log("Update the username: " + userId);

	Trek
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
						treks: req.body.treks,
						money: req.body.money,
						runtime: req.body.runtime,
						instances: req.body.instances,
						rewards: req.body.rewards,
					}, function (err, trekUser) {
						if (err) {
							console.log("Error creating new trek user");
							res
								.status(400)
								.json({
									"message": userId + " trek user could not be created."
								});
						} else {
							console.log("Trek user created ", trekUser);
							res
								.status(201)
								.json({
									"message": "Trek user has been created."
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
				doc.treks += req.body.treks;
				doc.money += req.body.money;
				doc.runtime  += req.body.runtime;
				doc.instances += req.body.instances;
				for (var key in req.body.rewards) {
					if (req.body.rewards.hasOwnProperty(key) && doc.rewards.hasOwnProperty(key)) {
						doc.rewards[key] += req.body.rewards[key];
						doc.markModified('rewards.'+key);
				    }
				}
				doc.save(function (err, trekUserUpdated) {
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