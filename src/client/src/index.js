import ReactDOM from 'react-dom';

import App from './App';

const $root = document.getElementById('root');

const logged = window.localStorage.getItem('logged') ? true : false;
const user = window.localStorage.getItem('user')
	? JSON.parse(window.localStorage.getItem('user'))
	: null;
const log = {
	logged,
	user,
};

ReactDOM.render(<App initialLog={log} />, $root);
