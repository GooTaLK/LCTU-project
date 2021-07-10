import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import InputSearch from '../../CommonComponents/InputSearch/InputSearch';
import ModalCard from '../../CommonComponents/ModalCard/ModalCard';
import './LogginCountryList.scss';

const LogginCountryList = ({
	toggleModal,
	form,
	setForm,
	countries,
	phoneInput,
	setIntoInput,
	validationStyles,
	setValidationStyles,
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
		setValidationStyles({ ...validationStyles, preCode: true });
		toggleModal({ active: false });
	};

	const Content = () => (
		<div className="country-list__container">
			<InputSearch
				searchValue={searchValue}
				handleChangeSearch={handleChangeSearch}
			/>
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
	);

	return (
		<ModalCard
			title="Countries"
			content={{ content: Content }}
			toggleModal={toggleModal}
		/>
	);
};

export default LogginCountryList;
