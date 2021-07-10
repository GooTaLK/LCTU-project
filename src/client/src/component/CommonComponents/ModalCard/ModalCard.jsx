import './ModalCard.scss';

const ModalCard = ({
	title,
	editBtn,
	closeBtn,
	centralBtn,
	header,
	content,
	toggleModal,
}) => {
	const reEditBtn = { active: false, text: 'Edit', ...editBtn };
	const reCloseBtn = { active: true, text: 'Close', ...closeBtn };
	const reCentralBtn = { active: false, content: () => null, ...centralBtn };
	const reHeader = { active: false, content: () => null, ...header };
	const reContent = { active: true, content: () => null, ...content };

	const handleClickClose = () =>
		toggleModal({ active: false, insideComponent: () => null });

	return (
		<div className="card" onClick={(e) => e.stopPropagation()}>
			<header className="card-header">
				<div className="card-header__top-wrapper">
					<h1 className="card__title">{title}</h1>

					{reEditBtn.active && (
						<button className="card__top-button">{reEditBtn.text}</button>
					)}

					{reCloseBtn.active && (
						<button className="card__top-button" onClick={handleClickClose}>
							{reCloseBtn.text}
						</button>
					)}
				</div>
				{reHeader.active && (
					<div className="card-header__content-wrapper">
						{reHeader.content()}
						{reCentralBtn.active && (
							<button className="card__central-button">
								{reCentralBtn.content()}
							</button>
						)}
					</div>
				)}
			</header>
			{reContent.active && (
				<div className="card-content">{reContent.content()}</div>
			)}
		</div>
	);
};

export default ModalCard;
