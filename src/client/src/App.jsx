import React, { useState, useEffect } from 'react';

import Loggin from './component/LogginPage/Loggin';
import Chat from './component/ChatPage/Chat';
import ModalBackground from './component/CommonComponents/ModalBackground/ModalBackground';
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

const App = () => {
	const [log, setLog] = useState({ logged: false, user: null });
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
		const logged = window.sessionStorage.getItem('logged');
		const user = window.sessionStorage.getItem('user');
		const newLog = {};

		logged && (newLog.logged = true);
		user && (newLog.user = user);
		setLog(newLog);
	}, []);

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
