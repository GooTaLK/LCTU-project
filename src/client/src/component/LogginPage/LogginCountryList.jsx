import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import './LogginCountryList.scss';

const LogginCountryList = ({
	toggleModal,
	form,
	setForm,
	countries,
	phoneInput,
	setIntoInput,
}) => {
	const [searchValue, setSearchValue] = useState('');
	const [countriesFilter, setCountriesFilter] = useState(countries);

	const handleChangeSearch = (e) => {
		const value = e.target.value.trim().toLowerCase();
		const countrysFilters = countries.filter(
			(country) => country.country.toLowerCase().indexOf(value) !== -1
		);

		setCountriesFilter(countrysFilters);
		setSearchValue(e.target.value);
	};

	const handleClickClose = () => {
		toggleModal({ active: false });
	};

	const handleClickCountry = (e) => {
		const country =
			e.target.dataset.country || e.target.parentElement.dataset.country;
		const preCode = e.target.dataset.pre || e.target.parentElement.dataset.pre;

		setForm({
			...form,
			country,
			preCode,
		});
		phoneInput.current.focus();
		setIntoInput({ phoneNumberLabel: true, preCodeLabel: true });
		toggleModal({ active: false });
	};

	return (
		<div className="country-list" onClick={(e) => e.stopPropagation()}>
			<div className="country-list__topbar card-topbar">
				<span>Country</span>
				<span onClick={handleClickClose}>Close</span>
			</div>
			<div className="country-list__container">
				<div className="country-list__container-search">
					<i className="fas fa-search"></i>
					<input
						className="country-list__container-search__input"
						type="search"
						placeholder="Search..."
						value={searchValue}
						onChange={handleChangeSearch}
					/>
				</div>
				<ul className="country-list__container-list">
					{countriesFilter.map((country) => (
						<li
							key={uuidV4()}
							data-country={country.country}
							data-pre={country.prePhoneNumber}
							onClick={handleClickCountry}
						>
							<span>{country.country}</span>
							<span>{country.prePhoneNumber}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default LogginCountryList;
