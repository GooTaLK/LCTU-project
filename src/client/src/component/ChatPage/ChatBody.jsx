import ChatBodyContact from './ChatBodyContact';
import ChatBodyInbox from './ChatBodyInbox';
import './ChatBody.scss';

const ChatBody = ({ user }) => {
	return (
		<div className="chat-body">
			<ChatBodyContact contacts={user.contacts} />
			<ChatBodyInbox user={user} />
		</div>
	);
};

export default ChatBody;
