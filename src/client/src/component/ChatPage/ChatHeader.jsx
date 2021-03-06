import React, { useState } from 'react';

import useClickOutside from '../../hooks/useClickOutside';

import ChatSettingsModal from './Modals/ChatSettingsModal';
import './ChatHeader.scss';
import ChatUserInfo from './Modals/ChatUserInfo';

const ChatHeader = ({ user, toggleModal, setLog }) => {
	const [leftMenu, setLeftMenu] = useState(false);
	const [rightMenu, setRightMenu] = useState(false);
	const [rightSide, setRightSide] = useState(true);

	const { btnRef: $btnLeftMenu, ref: $leftMenu } = useClickOutside(() =>
		setLeftMenu(false)
	);
	const { btnRef: $btnRightMenu, ref: $rightMenu } = useClickOutside(() =>
		setRightMenu(false)
	);

	const handleClickToggleMenu = (stringMenu) => {
		stringMenu === 'left' && setLeftMenu(!leftMenu);
		stringMenu === 'right' && setRightMenu(!rightMenu);
	};

	const handleClickSettings = () => {
		handleClickToggleMenu('left');
		toggleModal({
			active: true,
			insideComponent: ChatSettingsModal,
			params: { user, setLog, toggleModal },
		});
	};

	const handleClickUserInfo = () => {
		toggleModal({
			active: true,
			insideComponent: ChatUserInfo,
			params: { toggleModal },
		});
	};

	return (
		<nav className="chat-header">
			<div className="chat-header__left">
				<ul
					className={leftMenu ? 'left__menu open' : 'left__menu'}
					ref={$leftMenu}
				>
					<li className="left__menu__item">
						<a>
							<i className="fas fa-user-friends"></i>New group
						</a>
					</li>

					<li className="left__menu__item">
						<a>
							<i className="fas fa-address-book"></i>Contacts
						</a>
					</li>

					<li className="left__menu__item" onClick={handleClickSettings}>
						<a>
							<i className="fas fa-cog"></i>Settings
						</a>
					</li>

					<li className="left__menu__item">
						<a href="/" target="_blank">
							<i className="fas fa-question-circle"></i>Telegram FAQ
						</a>
					</li>

					<li className="left__menu__item">
						<a>
							<i className="fab fa-telegram"></i>About
						</a>
					</li>
				</ul>
				<div
					className={leftMenu ? 'left__menu-btn clicked' : 'left__menu-btn'}
					onClick={(e) => handleClickToggleMenu('left')}
					ref={$btnLeftMenu}
				>
					<span
						className={
							leftMenu ? 'left__menu-btn__icon active' : 'left__menu-btn__icon'
						}
						id="menu-bars"
					></span>
					<span className="left__menu-btn__logo">Telegram</span>
				</div>
			</div>
			<div className={rightSide ? "chat-header__right active" : "chat-header__right"}> 
				<div className="right__user-info" onClick={handleClickUserInfo}>
					User info
				</div>

				<div className="right__search-btn">
					<i className="fas fa-search"></i>
				</div>

				<div
					className={rightMenu ? 'right__menu-btn clicked' : 'right__menu-btn'}
					onClick={() => handleClickToggleMenu('right')}
					ref={$btnRightMenu}
				>
					<span id="menu-points"> </span>
				</div>

				<ul
					className={rightMenu ? 'right__menu open' : 'right__menu'}
					ref={$rightMenu}
				>
					<li className="right__menu__item">Select messages</li>

					<li className="right__menu__line-divider"></li>

					<li className="right__menu__item">Photos</li>

					<li className="right__menu__item">Videos</li>

					<li className="right__menu__item">Files</li>

					<li className="right__menu__item">Audios</li>

					<li className="right__menu__item">Shared links</li>

					<li className="right__menu__item">Voice messages</li>

					<li className="right__menu__item">Video messages</li>
				</ul>
			</div>
		</nav>
	);
};

export default ChatHeader;
