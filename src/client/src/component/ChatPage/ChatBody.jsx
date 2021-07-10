import ChatBodyContact from './ChatBodyContact';
import ChatBodyInbox from './ChatBodyInbox';
import './ChatBody.scss';

const ChatBody = () => {
	return (
		<div className="chat-body">
			<ChatBodyContact />
			<ChatBodyInbox />
		</div>
	);
};

export default ChatBody;
