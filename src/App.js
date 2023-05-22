import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
	return (
		<div>
			<div>Personal Digital Assistants</div>

			<ProfileCard
				name="Alexa"
				imgSrc=""
				tag="@alexa99"
				description="I'll help you buy stuff on Amazon"
			/>
			<ProfileCard
				name="Cortana"
				imgSrc=""
				tag="@Cortana12"
				description="Personal assistant by Microsoft"
			/>
			<ProfileCard
				name="Siri"
				imgSrc=""
				tag="@siri44"
				description="I don't get a lot of updates anymore"
			/>
		</div>
	);
};

export default App;