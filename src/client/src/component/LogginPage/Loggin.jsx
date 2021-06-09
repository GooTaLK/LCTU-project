import React, { useState, useEffect, useRef } from 'react';

import LogginForm from './LogginForm';
import LogginFooter from './LogginFooter';
import './Loggin.scss';
import '../../../public/assets/telegram-icons.png';

const Loggin = ({
	setLog,
	toggleModal,
	DB: { usersLoggedDB, countryDataBase },
}) => {
	const codeInput = useRef();
	const phoneInput = useRef();

	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const getCountries = () => {
			// const res = await fetch();
			// const data = await res.json();

			setCountries(countryDataBase);
		};

		getCountries();
	}, [countries]);

	return (
		<section className="log">
			<a className="log__top-telegram" href="/">
				<i className="fas fa-location-arrow log__telegram-icon"></i>
				Telegram
			</a>

			<h3 className="log__title">Sign in</h3>

			<p className="log__paraghraph">
				Please, choce your country and put all your phone number.
			</p>

			<p className="log__paraghraph">
				Please note that you need an existing account to log into Telegram Web.
				To sign up for telegram, use one of our <a href="/">mobile apps</a>.
			</p>

			<LogginForm
				toggleModal={toggleModal}
				codeInput={codeInput}
				phoneInput={phoneInput}
				countries={countries}
				setLog={setLog}
				usersLoggedDB={usersLoggedDB}
			/>

			<LogginFooter />
		</section>
	);
};

export default Loggin;
