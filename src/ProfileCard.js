function ProfileCard({ name, imgSrc, tag, description }) {
	return (
		<div>
			<img src={imgSrc} height={75} alt="logo" />
			<h1>{name}</h1>
			<p>{tag}</p>
			<h4>{description}</h4>
		</div>
	);
};

export default ProfileCard;