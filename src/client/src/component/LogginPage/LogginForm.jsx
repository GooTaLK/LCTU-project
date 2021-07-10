import React, { useState } from 'react';

import LogginConfirm from './Modals/LogginConfirm';
import LogginCountryList from './Modals/LogginCountryList';
import './LogginForm.scss';

const LogginForm = ({
	toggleModal,
	codeInput,
	phoneInput,
	countries,
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
				validationStyles,
				setValidationStyles,
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
		const test = {
			preCode: /^\+\d{1,5}$/.test(preCode),
			phoneNumber: /^\d{6,10}$/.test(phoneNumber),
		};

		const callBackForConfirm = async () => {
			if (test.preCode || test.phoneNumber) {
				let user;

				const validateCode = () => {
					return (
						countries.filter((country) => country.prePhoneNumber === preCode)
							.lenght !== 0
					);
				};

				const getUser = async () => {
					try {
						const res = await fetch(`/api/users/${preCode}/${phoneNumber}`);
						const data = await res.json();

						window.sessionStorage.setItem('logged', 'true');
						window.sessionStorage.setItem('user', JSON.stringify(data));
						user = data;
						return true;
					} catch (err) {
						console.log(err);
						user = null;
						return false;
					}
				};

				const phoneValid = await getUser();
				const codeValid = validateCode();

				if (phoneValid || codeValid) {
					user === null
						? setValidationStyles({
								phoneNumber: phoneValid,
								preCode: codeValid,
						  })
						: setLog({ logged: true, user });
				} else {
					setValidationStyles({ phoneNumber: false, preCode: false });
				}
			} else {
				setValidationStyles({
					preCode: test.preCode,
					phoneNumber: test.phoneNumber,
				});
			}
		};

		if (phoneNumber === '' || preCode === '') {
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
						autoComplete="off"
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
						autoComplete="off"
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
