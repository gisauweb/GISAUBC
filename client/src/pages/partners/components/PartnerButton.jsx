import ReactGA from 'react-ga4';
import { Button } from 'shared/components';
import emailIcon from 'assets/partners/emailIcon.svg';

export default function PartnerButton() {
	const handlePartnerButton = () => {
		ReactGA.event({
			category: 'Join Partner',
			action: 'Click to register for partnership',
		});
		window.open('mailto:sponsorship.gisau@gmail.com', '_blank', 'noreferrer');
	};
	return <Button text='Become a Partner' icon={emailIcon} handleClickButton={handlePartnerButton} />;
}
