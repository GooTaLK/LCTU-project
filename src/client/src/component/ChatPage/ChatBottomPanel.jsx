import React, { useState, useRef } from 'react';

import './ChatBottomPanel.scss';
import useEndOfInput from '../../hooks/useEndOfInput';

const ChatBottomPanel = () => {
	const $textarea = useRef();

	const [textareaContent, setTextareaContent] = useState('');
	const [textareaEmpty, setTextareaEmpty] = useState(true);

	const handleInputTextarea = (e) => {
		if (!textareaEmpty && e.target.textContent === '') setTextareaEmpty(true);
		if (textareaEmpty && e.target.textContent !== '') setTextareaEmpty(false);

		setTextareaContent(e.target.textContent);
	};

	const handleClickActions = (e) => {
		e.preventDefault();
	};

	const handleClickEmojis = (e) => {
		e.preventDefault();

		setTextareaEmpty(false);
		$textarea.current.textContent += e.target.textContent;
		useEndOfInput.setEndOfContenteditable($textarea.current);
	};

	return (
		<form className="bottom-panel__form">
			<div className="bottom-panel__form__top-wraper">
				<div
					id="textarea"
					className={textareaEmpty ? 'empty' : ''}
					contentEditable
					ref={$textarea}
					onInput={handleInputTextarea}
				></div>
				<button onClick={(e) => e.preventDefault()}>☺</button>
			</div>
			<div className="bottom-panel__form__bottom-wraper">
				<div>
					<button title="Send file" onClick={handleClickActions}>
						<i className="fas fa-sticky-note file-icon"></i>
					</button>
					<button title="Send media" onClick={handleClickActions}>
						<i className="fas fa-camera"></i>
					</button>
					<button title="Record a message" onClick={handleClickActions}>
						<i className="fas fa-microphone"></i>
					</button>
				</div>

				<div>
					<button onClick={handleClickEmojis}>☻</button>
					<button onClick={handleClickEmojis}>♥</button>
					<button onClick={handleClickEmojis}>♣</button>
					<button onClick={handleClickEmojis}>○</button>
					<button onClick={handleClickEmojis}>◙</button>
					<button onClick={handleClickEmojis}>♂</button>
					<button onClick={handleClickEmojis}>♀</button>
				</div>

				<button type="submit">Send</button>
			</div>
		</form>
	);
};

export default ChatBottomPanel;
