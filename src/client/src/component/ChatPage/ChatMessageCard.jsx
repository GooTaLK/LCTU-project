import ProfileImage from '../CommonComponents/ProfileImage/ProfileImage';
import './ChatMessageCard.scss';

const ChatMessageCard = ({
	self = true,
	user,
	avatar = 'https://lorempixel.com/200/200/cats',
	message,
	date = '16/06/2021',
}) => {
	return (
		<div className="message-card">
			<i className="fas fa-check select-icon"></i>

			<div className="message">
				<ProfileImage src={avatar} size="42px" />

				<div className="message__name">
					<span>{user}</span>
				</div>

				<span className="message__date">{date}</span>

				<p className="message__message">{message}</p>
			</div>
		</div>
	);
};

export default ChatMessageCard;
