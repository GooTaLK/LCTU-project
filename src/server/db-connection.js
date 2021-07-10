const mongoose = require('mongoose');

const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster00.bfu7f.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.then(console.log('++++ Database connected to ' + uri + ' ++++'))
	.catch((err) => console.log(err));

const db = mongoose.connection;

db.on('open', () => console.log('Database connected to ' + uri));
db.on('error', console.error.bind(console, 'connection error: '));
