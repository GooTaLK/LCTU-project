import './ProfileImage.scss';

const ProfileImage = ({ src, size }) => {
	return (
		<img
			className="profile-img"
			style={{ '--size': size }}
			src={src}
			alt="avatar"
		/>
	);
};

export default ProfileImage;
