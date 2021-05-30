const express = require('express');
const path = require('path');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Starting the server
app.listen(app.get('port'), () => {
	console.log('Listening on port: ' + app.get('port'));
});
