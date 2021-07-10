const dbUsers = require('../database/users.json');
const User = require('../models/users');

const getUsers = async (req, res) => {
	const count = await User.estimatedDocumentCount();

	if (count === 0) {
		await User.create(dbUsers);
		console.log('AaaAaaaA..?');
	} else {
		console.log('kheé?');
	}

	const users = await User.find({});
	res.json(users);
};

const getUserById = async (req, res) => {
	const { code, phone } = req.params;
	const user = await User.findOne({
		phoneNumber: phone,
		preCode: code,
	});
	res.json(user);
};

module.exports = {
	getUsers,
	getUserById,
};
