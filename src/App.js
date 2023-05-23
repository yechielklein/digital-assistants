import 'bulma/css/bulma.css';

import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>

			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column is-3">
							<ProfileCard
								name="Alexa"
								imgSrc={AlexaImage}
								tag="@alexa99"
								description="I'll help you buy stuff on Amazon"
							/>
						</div>

						<div className="column is-3">
							<ProfileCard
								name="Cortana"
								imgSrc={CortanaImage}
								tag="@Cortana12"
								description="Personal assistant by Microsoft"
							/>
						</div>

						<div className="column is-3">
							<ProfileCard
								name="Siri"
								imgSrc={SiriImage}
								tag="@siri44"
								description="I don't get a lot of updates anymore"
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default App;