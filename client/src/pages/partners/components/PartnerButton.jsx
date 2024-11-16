import ReactGA from 'react-ga4';
import { Button } from 'shared/components';
import emailIcon from 'assets/partners/emailIcon.svg';

export default function PartnerButton() {
	const handlePartnerButton = () => {
		ReactGA.event({
			category: 'Join Member',
			action: 'Click to register for membership',
		});
		window.open('mailto:sponsorship.gisau@gmail.com', '_blank', 'noreferrer');
	};
	return <Button text='Become a Partner' icon={emailIcon} handleClickButton={handlePartnerButton} />;
}
