import ButtonCheckBox from '../../CommonComponents/ButtonCheckBox/ButtonCheckBox';
import ButtonForModal from '../../CommonComponents/ButtonForModal/ButtonForModal';
import ModalCard from '../../CommonComponents/ModalCard/ModalCard';
import HeaderProfile from '../../CommonComponents/ModalHeaderForProfile/HeaderProfile';
import ShowNameValue from '../../CommonComponents/ShowNameValue/ShowNameValue';

const ChatUserInfo = ({ toggleModal }) => {
	const CentralBtn = () => <i className="fas fa-comment-alt"></i>;

	const Header = () => (
		<HeaderProfile
			username="userName"
			state="State"
			srcImg="https://lorempixel.com/200/400/sports"
		/>
	);

	const Content = () => {
		return (
			<>
				<div className="info__division">
					<div className="info__division-icon">
						<i className="fas fa-phone"></i>
					</div>
					<div className="info__division-item">
						<ShowNameValue value="Number" name="Phone" />
						<ShowNameValue value="userName" name="Username" />
					</div>
				</div>

				<hr className="info__separator" />

				<div className="info__division">
					<div className="info__division-icon">
						<i className="fas fa-bell"></i>
					</div>
					<div className="info__division-item">
						<ButtonCheckBox label="Notifications" />
					</div>
				</div>

				<hr className="info__separator" />

				<div className="info__division">
					<div className="info__division-icon">
						<i className="fas fa-bars"></i>
					</div>
					<div className="info__division-item">
						<ButtonForModal text="Share contact" />
						<ButtonForModal text="more..." />
					</div>
				</div>
			</>
		);
	};

	return (
		<ModalCard
			title="Contact info"
			editBtn={{ active: true }}
			centralBtn={{ active: true, content: CentralBtn }}
			header={{ active: true, content: Header }}
			content={{ content: Content }}
			toggleModal={toggleModal}
		/>
	);
};

export default ChatUserInfo;
