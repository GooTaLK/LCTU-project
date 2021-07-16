import ProfileImage from '../CommonComponents/ProfileImage/ProfileImage';
import './ChatContactCard.scss';

const ChatContactCard = ({
	select,
	firstName,
	lastName,
	avatar,
	lastMessage,
}) => {
	return (
		<div className={select ? 'contact__card' : 'contact__card not-select'}>
			<ProfileImage src={avatar} size="48px" />
			<div className="card-text-wraper">
				<div className="contact__card__name">{firstName + ' ' + lastName}</div>
				<div className="contact__card__last-msg">
					{lastMessage.sentBy === 'You' ? (
						<span>{'You: ' + lastMessage.message}</span>
					) : (
						lastMessage.message
					)}
				</div>
			</div>
			<div className="contact__card__date">{lastMessage.date}</div>
		</div>
	);
};

export default ChatContactCard;
