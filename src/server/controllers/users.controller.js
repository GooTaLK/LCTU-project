const dbUsers = require('../database/users.json');
const User = require('../models/users');

const getUsers = async (req, res) => {
	try {
		const count = await User.estimatedDocumentCount();

		if (count === 0) {
			await User.create(dbUsers);
		}

		const users = await User.find({});
		console.log('\nsuccess GET: \n' + users);
		res.json(users);
	} catch (error) {
		console.log('\nError to GET: \n' + error);
	}
};

const getUser = async (req, res) => {
	const { code, phone } = req.params;
	const user = await User.findOne({
		phoneNumber: phone,
		preCode: code,
	});

	if (user !== null) {
		console.log('\nGET -> user : \n' + user);
		res.set('Content-Type', 'application/json');
		res.set(200).json({
			status: 200,
			response: user,
			responseText: 'GET request successfully',
			success: true,
		});
	} else {
		console.log('\nUser not found in GET request');
		res.set('Content-Type', 'application/json');
		res.set(400).json({
			status: 400,
			response: user,
			responseText: 'User not found',
			success: false,
		});
	}
};

const patchUser = async (req, res) => {
	const { code, phone } = req.params;
	const patchedUser = await User.findOneAndUpdate(
		{ preCode: code, phoneNumber: phone },
		req.body,
		{
			new: true,
		}
	);

	// res.set('Content-Type', 'application/json; charset=utf-8');

	if (patchedUser !== null) {
		console.log('\nUpdated user: \n' + patchedUser);
		res.status(201).json({
			status: 201,
			response: patchedUser,
			responseText: 'User updated successfully',
			success: true,
		});
		console.log('Body from request: ', req.body);
	} else {
		console.log('\nPATCH user return null');
		console.log('Body from request: ', req.body);
		res.status(400).json({
			status: 400,
			response: patchedUser,
			responseText: 'User not find',
			success: false,
		});
	}
};

module.exports = {
	getUsers,
	getUser,
	patchUser,
};
