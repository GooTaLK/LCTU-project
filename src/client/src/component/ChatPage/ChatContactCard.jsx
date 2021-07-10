import ProfileImage from '../CommonComponents/ProfileImage/ProfileImage';
import './ChatContactCard.scss';

const ChatContactCard = ({ select }) => {
	return (
		<div className={select ? 'contact__card' : 'contact__card not-select'}>
			<ProfileImage src="http://lorempixel.com/200/200/nature" size="48px" />
			<div className="card-text-wraper">
				<div className="contact__card__name">Contact NAME desu!</div>
				<div className="contact__card__last-msg">ないですよ！バカ</div>
			</div>
			<div className="contact__card__date">11/06/21</div>
		</div>
	);
};

export default ChatContactCard;
