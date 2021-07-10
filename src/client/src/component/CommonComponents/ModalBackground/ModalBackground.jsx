import './ModalBackground.scss';

const ModalBackground = ({ toggleModal, Component, ...props }) => {
	const handleClickClose = () =>
		toggleModal({ active: false, insideComponent: () => null });

	return (
		<div className="modal-bg" onClick={handleClickClose}>
			<div className="modal-close">
				<i className="fas fa-times"></i>
			</div>

			<Component toggleModal={toggleModal} {...props} />
		</div>
	);
};

export default ModalBackground;
