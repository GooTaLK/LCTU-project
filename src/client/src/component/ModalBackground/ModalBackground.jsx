import './ModalBackground.scss';

const ModalBackground = ({ toClose, Component, ...props }) => {
	const handleClickClose = () => toClose();

	return (
		<div className="modal-bg" onClick={handleClickClose}>
			<div className="modal-close">
				<i className="fas fa-times"></i>
			</div>

			<Component {...props} />
		</div>
	);
};

export default ModalBackground;
