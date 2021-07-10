import ProfileImage from '../../CommonComponents/ProfileImage/ProfileImage';
import './HeaderProfile.scss';

const HeaderProfile = ({ username, state, srcImg }) => {
	return (
		<div className="modal-info__profile-data">
			<ProfileImage src={srcImg} size="72px" />
			<div className="modal-info__contain-wrapper">
				<p className="modal-info__username">{username}</p>
				<p className="modal-info__state">{state}</p>
			</div>
		</div>
	);
};

export default HeaderProfile;
