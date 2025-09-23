import ReactGA from 'react-ga4';
import { Button } from 'shared/components';
import penIcon from 'assets/members/penIcon.svg';

export default function MemberButton({ showIcon = true, text }) {
	const handleMemberButton = () => {
		ReactGA.event({
			category: 'Join Member',
			action: 'Click to register for membership',
		});
		window.open('https://forms.gle/eEoMYZDpf8yofAAYA ', '_blank', 'noreferrer');
	};

	return <Button text={text} icon={showIcon ? penIcon : undefined} handleClickButton={handleMemberButton} />;
}
