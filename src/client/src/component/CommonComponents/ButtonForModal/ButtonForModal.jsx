import './ButtonForModal.scss';

const ButtonForModal = ({ text, toClick = () => null }) => {
	const handleClick = () => toClick();

	return (
		<div className="modal__button">
			<button onClick={handleClick}>{text}</button>
		</div>
	);
};

export default ButtonForModal;
