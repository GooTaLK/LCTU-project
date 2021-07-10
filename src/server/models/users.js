const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		name: String,
		contacts: Array,
		avatar: String,
		phoneNumber: Number,
		preCode: String,
		country: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model('User', userSchema);
