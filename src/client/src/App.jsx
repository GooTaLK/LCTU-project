import React, { useState, useEffect, useRef } from 'react';

import Loggin from './component/LogginPage/Loggin';
import Chat from './component/ChatPage/Chat';
import ModalBackground from './component/CommonComponents/ModalBackground/ModalBackground';
import useUpdateUser from './hooks/useUpdateUser';
import './normalize.css';
import './App.scss';

// Temporal data base
/*
const usersLoggedDB = [
	{
		phoneNumber: '123456',
		preCode: '+81',
		country: 'Japan',
		id: 1,
	},
	{
		phoneNumber: '60782825',
		preCode: '+1',
		country: 'United Stade',
		id: 2,
	},
	{
		phoneNumber: '322322',
		preCode: '+34',
		country: 'Spain',
		id: 3,
	},
	{
		phoneNumber: '999434322',
		preCode: '+51',
		country: 'Peru',
		id: 4,
	},
];
*/
const countryDataBase = [
	{
		country: 'Peru',
		prePhoneNumber: '+51',
		id: 1,
	},
	{
		country: 'United Stade',
		prePhoneNumber: '+1',
		id: 2,
	},
	{
		country: 'Japan',
		prePhoneNumber: '+81',
		id: 3,
	},
	{
		country: 'Spain',
		prePhoneNumber: '+34',
		id: 4,
	},
];

const App = ({ initialLog }) => {
	const firstUpdate = useRef(true);
	const [log, setLog] = useState(
		initialLog /* { logged: false, user: null } */
	);
	const [modal, setModal] = useState({
		active: false,
		insideComponent: () => null,
		params: {},
	});

	const toggleModal = ({
		active = !modal.active,
		insideComponent = () => null,
		params = {},
	}) => {
		setModal({ active, insideComponent, params });
	};

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;

			useUpdateUser(log, setLog);

			return;
		}

		if (log.logged) {
			window.localStorage.setItem('logged', 'true');
			window.localStorage.setItem('user', JSON.stringify(log.user));
		} else {
			window.localStorage.removeItem('logged');
			window.localStorage.removeItem('user');
		}
	}, [log]);

	// useEffect(() => {
	// 	const logged = window.localStorage.getItem('logged');
	// 	const user = window.localStorage.getItem('user');
	// 	const newLog = { logged: false, user: null };

	// 	console.log('There are trees everywhere!');

	// 	if (logged === 'true') newLog.logged = true;
	// 	if (user && user !== 'null') newLog.user = JSON.parse(user);

	// 	if (newLog.logged && newLog.user !== null) setLog(newLog);
	// }, []);

	// useEffect(() => {
	// 	console.log('Oops!');
	// });

	return (
		<div className={log.logged ? 'App' : 'App bg-log'}>
			{!log.logged && (
				<Loggin
					setLog={setLog}
					toggleModal={toggleModal}
					DB={{ countryDataBase }}
				/>
			)}
			{log.logged && (
				<Chat user={log.user} toggleModal={toggleModal} setLog={setLog} />
			)}
			{modal.active && (
				<ModalBackground
					toggleModal={toggleModal}
					Component={modal.insideComponent}
					{...modal.params}
				/>
			)}
		</div>
	);
};

export default App;
