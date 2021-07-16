import InputSearch from '../CommonComponents/InputSearch/InputSearch';
import ChatContactCard from './ChatContactCard';
import './ChatBodyContact.scss';

const ChatBodyContact = ({ contacts }) => {
	return (
		<div className="chat-body__contact">
			<InputSearch
				searchValue={''}
				handleChangeSearch={(e) =>
					console.log(
						'Hola, ¿Es esta la letra que presionaste? --> ' + e.target.value
					)
				}
			/>
			<div className="contact__container">
				{contacts.map((contact) => (
					<ChatContactCard
						firstName={contact.firstName}
						lastName={contact.lastName}
						avatar={contact.avatar}
						lastMessage={contact.messages.lastMessage}
					/>
				))}
			</div>
		</div>
	);
};

export default ChatBodyContact;
