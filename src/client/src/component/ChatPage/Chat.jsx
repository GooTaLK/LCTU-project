import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import './Chat.scss';

const Chat = ({ user, toggleModal, setLog }) => {
	return (
		<div className="chat">
			<ChatHeader user={user} toggleModal={toggleModal} setLog={setLog} />
			<ChatBody user={user} />
			<footer className="chat__empty-footer" />
		</div>
	);
};

export default Chat;
