import React, { useState } from 'react';

import './ButtonCheckBox.scss';

const ButtonCheckBox = ({
	label,
	isChecked = false,
	actionWhenTrue = () => null,
}) => {
	const [checked, setChecked] = useState(isChecked);

	const handleClickCheckBox = () => {
		setChecked(!checked);
		if (checked) actionWhenTrue();
	};

	return (
		<div className="button_check-box" onClick={handleClickCheckBox}>
			<p>{label}</p>
			<span className={checked ? 'checked' : ''}></span>
		</div>
	);
};

export default ButtonCheckBox;
