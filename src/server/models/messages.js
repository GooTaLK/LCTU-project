const { Schema, model } = require('mongoose');

const messagesSchema = new Schema(
	{
		message: String,
		written_by: {
			avatar: String,
			user: String,
			user_id: Number,
		},
		sent_to: {
			avatar: String,
			user: String,
			user_id: Number,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model('Message', messagesSchema);
