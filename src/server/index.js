// Dotenv
require('dotenv').config();

// DB-Connection
require('./db-connection');

// App
const app = require('./app');

// Starting the server
app.listen(app.get('port'), () => {
	console.log('Listening on port: ' + app.get('port'));
});
