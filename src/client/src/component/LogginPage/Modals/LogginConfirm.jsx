import React, { useEffect, useRef } from 'react';

import './LogginConfirm.scss';

const LogginConfirm = ({ toggleModal, value, cb }) => {
	const okBtn = useRef();

	const onClickCancel = () => {
		toggleModal({ active: false });
	};

	const onClickOk = () => {
		toggleModal({ active: false });
		cb();
	};

	useEffect(() => {
		okBtn.current.focus();
	}, []);

	return (
		<div className="confirm" onClick={(e) => e.stopPropagation()}>
			<p className="confirm__ask">Is it number right?</p>

			<span className="confirm__value">{value}</span>

			<div className="confirm__btn">
				<button className="confirm__btn-cancel" onClick={onClickCancel}>
					Calcel
				</button>
				<button className="confirm__btn-ok" onClick={onClickOk} ref={okBtn}>
					Ok
				</button>
			</div>
		</div>
	);
};

export default LogginConfirm;
