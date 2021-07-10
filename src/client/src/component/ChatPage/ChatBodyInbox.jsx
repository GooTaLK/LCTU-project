import React, { useRef } from 'react';

import ChatBottomPanel from './ChatBottomPanel';
import ProfileImage from '../CommonComponents/ProfileImage/ProfileImage';
import ChatMessageCard from './ChatMessageCard';
import './ChatBodyInbox.scss';

const ChatBodyInbox = () => {
	const msgContainer = useRef();

	return (
		<div className="chat-body__inbox">
			<div className="inbox__messages-container" ref={msgContainer}>
				<ChatMessageCard user="User" message=" ahahahahahaha...?" />
				<ChatMessageCard
					user="User"
					message="Aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah aaaaaaaaaaaaaahaaaa ahahahahahaha..."
				/>
				<ChatMessageCard
					user="User"
					message="Aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah aaaaaaaaaaaaaahaaaa ahahahahahaha..."
				/>
				<ChatMessageCard user="User" message=" ahahahahahaha...?" />
				<ChatMessageCard
					self={false}
					user="User"
					message="Aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah aaaaaaaaaaaaaahaaaa ahahahahahaha..."
				/>
				<ChatMessageCard
					user="User"
					message="Aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah aaaaaaaaaaaaaahaaaa ahahahahahaha..."
				/>
				<ChatMessageCard self={false} user="User" message="Hi there!" />
				<ChatMessageCard user="User" message="Oh thank you" />
			</div>
			<div className="inbox__bottom-panel">
				<ProfileImage src="http://lorempixel.com/200/200/cats" size="52px" />

				<ChatBottomPanel />

				<ProfileImage src="http://lorempixel.com/200/200/nature" size="52px" />
			</div>
		</div>
	);
};

export default ChatBodyInbox;
