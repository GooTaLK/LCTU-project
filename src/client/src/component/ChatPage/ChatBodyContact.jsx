import InputSearch from '../CommonComponents/InputSearch/InputSearch';
import ChatContactCard from './ChatContactCard';
import './ChatBodyContact.scss';

const ChatBodyContact = () => {
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
				<ChatContactCard select={true} />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
				<ChatContactCard />
			</div>
		</div>
	);
};

export default ChatBodyContact;
