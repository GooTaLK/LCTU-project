import React, { useRef } from 'react';

import ButtonCheckBox from '../../CommonComponents/ButtonCheckBox/ButtonCheckBox';
import ButtonForModal from '../../CommonComponents/ButtonForModal/ButtonForModal';
import ModalCard from '../../CommonComponents/ModalCard/ModalCard';
import HeaderProfile from '../../CommonComponents/ModalHeaderForProfile/HeaderProfile';
import ShowNameValue from '../../CommonComponents/ShowNameValue/ShowNameValue';
import './ChatSettingsModal.scss';

const ChatSettingsModal = ({ setLog, toggleModal }) => {
	const CentralBtn = () => <i className="fas fa-camera"></i>;

	const Header = () => (
		<HeaderProfile
			username="UserName"
			state="State"
			srcImg="https://lorempixel.com/200/200/cats"
		/>
	);

	const Content = () => {
		const radioDif = useRef();
		const radioNormal = useRef();

		const handleClickLogOutBtn = () => {
			window.sessionStorage.removeItem('logged');
			window.sessionStorage.removeItem('user');
			setLog({ logged: false, user: null });
			toggleModal({ active: false, insideComponent: () => null });
		};

		const handleClickRadio = (e) => {
			const getTarget = () => {
				if (e.target.dataset.radio) {
					return e.target;
				} else if (e.target.parentElement.dataset.radio) {
					return e.target.parentElement;
				} else if (e.target.parentElement.parentElement.dataset.radio) {
					return e.target.parentElement.parentElement;
				}
			};

			const target = getTarget();

			if (target.dataset.radio === 'dif') {
				radioDif.current.classList.add('checked');
				radioNormal.current.classList.remove('checked');
			} else if (target.dataset.radio === 'normal') {
				radioNormal.current.classList.add('checked');
				radioDif.current.classList.remove('checked');
			} else {
				console.log('aaa');
			}

			console.log(e.target);
		};

		return (
			<>
				<div className="info__division">
					<div className="info__division-icon">
						<i className="fas fa-phone"></i>
					</div>
					<div className="info__division-item">
						<ShowNameValue value="phoneNumber" name="Phone" />
						<ShowNameValue
							className="user-link"
							value="userName"
							name="Username"
						/>
					</div>
				</div>

				<hr className="info__separator" />

				<div className="info__division">
					<div className="info__division-icon">
						<i className="fas fa-bell"></i>
					</div>
					<div className="info__division-item">
						<ButtonCheckBox label="Desktop Notification" isChecked={true} />
						<ButtonCheckBox label="Background Notification" />
						<ButtonCheckBox label="Message Preview" isChecked={true} />
						<ButtonCheckBox label="Sound" isChecked={true} />

						<div className="info__division-item__range-input">
							<input type="range" />
						</div>
					</div>
				</div>

				<hr className="info__separator" />

				<div className="info__division">
					<div className="info__division-icon">
						<i className="fas fa-keyboard"></i>
					</div>
					<div className="info__division-item">
						<div
							data-radio="dif"
							className="info__division-item__radio-input"
							ref={radioDif}
							onClick={handleClickRadio}
						>
							<span></span>
							<p>
								<kbd>Enter</kbd> - send message, <kbd>Shift</kbd> +{' '}
								<kbd>Enter</kbd> - new line
							</p>
						</div>
						<div
							data-radio="normal"
							className="info__division-item__radio-input checked"
							ref={radioNormal}
							onClick={handleClickRadio}
						>
							<span></span>
							<p>
								<kbd>Ctrl</kbd>
								<kbd>Enter</kbd> - send message, <kbd>Enter</kbd> - new line
							</p>
						</div>
					</div>
				</div>

				<hr className="info__separator" />

				<div className="info__division">
					<div className="info__division-icon">
						<i className="fas fa-bars"></i>
					</div>
					<div className="info__division-item">
						<div className="info__division-item__select">
							<label htmlFor="select_language">Language</label>
							<select id="select_language">
								<option value="english">English</option>
							</select>
						</div>

						<ButtonForModal text="Set additional password" />

						<ButtonCheckBox label="Show Sensitive Content" />

						<ButtonForModal text="Activate sessions" />

						<ButtonForModal text="Log out" toClick={handleClickLogOutBtn} />
					</div>
				</div>
			</>
		);
	};

	return (
		<ModalCard
			title="Title"
			editBtn={{ active: true }}
			centralBtn={{ active: true, content: CentralBtn }}
			header={{ active: true, content: Header }}
			content={{ content: Content }}
			toggleModal={toggleModal}
		/>
	);
};

export default ChatSettingsModal;
