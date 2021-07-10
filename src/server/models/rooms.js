const { Schema, model } = require('mongoose');

const roomSchema = new Schema(
	{
		joined_users: Array,
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model('Room', roomSchema);
