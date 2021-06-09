import React, { useState } from 'react';

import LogginConfirm from './LogginConfirm';
import LogginCountryList from './LogginCountryList';
import './LogginForm.scss';

const LogginForm = ({
	toggleModal,
	codeInput,
	phoneInput,
	countries,
	usersLoggedDB,
	setLog,
}) => {
	const [form, setForm] = useState({
		country: '',
		preCode: '',
		phoneNumber: '',
	});
	const [validationStyles, setValidationStyles] = useState({
		preCode: true,
		phoneNumber: true,
	});
	const [confirmation, setConfirmation] = useState({
		valueToConfirm: '',
		confirm: false,
	});
	const [intoInput, setIntoInput] = useState({
		preCodeLabel: false,
		phoneNumberLabel: false,
	});

	const handleClickSelect = (e) => {
		toggleModal({
			insideComponent: LogginCountryList,
			params: {
				toggleModal,
				form,
				setForm,
				countries,
				setIntoInput,
				phoneInput,
				codeInput,
			},
		});
	};

	const handleBlurInput = (e) => {
		if (e.target.value === '')
			setIntoInput({
				...intoInput,
				[`${e.target.name}Label`]: false,
			});
	};

	const handleFocusInput = (e) => {
		setIntoInput({
			...intoInput,
			[`${e.target.name}Label`]: true,
		});
	};

	const handleChangeForm = (e) => {
		console.log('change');
		const name = e.target.name;
		const value = e.target.value;

		const validateWithRegExp = (context, regExp) => {
			setValidationStyles({
				...validationStyles,
				[context.target.name]: regExp.test(context.target.value),
			});
		};

		if (name === 'phoneNumber') {
			validateWithRegExp(e, /^\d{6,10}$/);
			setForm({ ...form, [name]: value });
		} else if (name === 'preCode') {
			const country = countries.filter(
				(country) => country.prePhoneNumber === value
			);

			validateWithRegExp(e, /^\+\d{1,5}$/);
			setForm({
				...form,
				country: country[0]?.country || 'Unknowed',
				[name]: value,
			});
		} else {
			setForm({ ...form, [name]: value });
		}
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();

		const preCode = e.target.preCode.value.trim();
		const phoneNumber = e.target.phoneNumber.value.trim();
		const fullPhone = preCode + ' ' + phoneNumber;

		const callBackForConfirm = () => {
			if (/^\+\d{1,5}$/.test(preCode) && /^\d{6,10}$/.test(phoneNumber)) {
				const phoneValid =
					usersLoggedDB.filter((user) => user.phoneNumber === phoneNumber)
						.lenght !== 0;
				const codeValid =
					usersLoggedDB.filter((user) => user.preCode === preCode).lenght !== 0;

				!phoneValid &&
					setValidationStyles({ ...validationStyles, phoneNumber: false });
				!codeValid &&
					setValidationStyles({ ...validationStyles, preCode: false });

				if (phoneValid && codeValid) {
					const userId = usersLoggedDB.filter(
						(user) =>
							user.phoneNumber === phoneNumber && user.preCode === preCode
					)[0]?.id;

					userId === undefined
						? setValidationStyles({ phoneNumber: false, preCode: false })
						: setLog({ logged: true, fetchId: userId });

					console.log('if de validacion en BD');
				}

				console.log('if de regExp');
			} else {
				setValidationStyles({
					preCode: false,
					phoneNumber: false,
				});

				console.log('else de regExp');
			}

			console.log('cb');
		};

		if (phoneNumber === '' && preCode === '') {
			const empty = { phone: true, code: true };
			phoneNumber === '' && (empty.phone = false);
			preCode === '' && (empty.code = false);

			setValidationStyles({ phoneNumber: empty.phone, preCode: empty.code });
		} else {
			toggleModal({
				insideComponent: LogginConfirm,
				params: { toggleModal, value: fullPhone, cb: callBackForConfirm },
			});
		}
	};

	return (
		<form className="log-form" onSubmit={handleSubmitForm}>
			<div className="log-form__select-country" onClick={handleClickSelect}>
				<label>Country</label>
				<div>{form.country}</div>
			</div>

			<div className="log-form__number-input">
				<div
					className={
						validationStyles.preCode
							? 'number-input__code'
							: 'number-input__code invalid-pre-code'
					}
				>
					<label
						className={
							intoInput.preCodeLabel
								? 'number-input__code-label number-input__code-label--up'
								: 'number-input__code-label'
						}
					>
						Code
					</label>
					<input
						className="number-input__code-input"
						ref={codeInput}
						name="preCode"
						onChange={handleChangeForm}
						onBlur={handleBlurInput}
						onFocus={handleFocusInput}
						value={form.preCode}
					/>
				</div>
				<div
					className={
						validationStyles.phoneNumber
							? 'number-input__phone'
							: 'number-input__phone invalid-phone-number'
					}
				>
					<label
						className={
							intoInput.phoneNumberLabel
								? 'number-input__phone-label number-input__phone-label--up'
								: 'number-input__phone-label'
						}
					>
						Phone number
					</label>
					<input
						className="number-input__phone-input"
						ref={phoneInput}
						name="phoneNumber"
						onChange={handleChangeForm}
						onBlur={handleBlurInput}
						onFocus={handleFocusInput}
						value={form.phoneNumber}
					/>
				</div>
			</div>

			<button className="log-form__submit" type="submit">
				Next
				<i className="fas fa-chevron-right"></i>
			</button>
		</form>
	);
};

export default LogginForm;
