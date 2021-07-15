const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		username: String,
		lastName: String,
		firstName: String,
		state: {
			online: Boolean,
			stateText: String,
		},
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
