function ProfileCard({ name, imgSrc, tag, description }) {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-1by1">
					<img src={imgSrc} alt="logo" />
				</figure>
			</div>

			<div className="card-content">
				<div className="media-content">
					<p className="title is-4">{name}</p>
					<p className="subtitle is-6">{tag}</p>
				</div>

				<div className="content">{description}</div>
			</div>
		</div>
	);
};

export default ProfileCard;