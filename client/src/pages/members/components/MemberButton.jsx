import ReactGA from 'react-ga4';
import { Button } from 'shared/components';
import penIcon from 'assets/members/penIcon.svg';
import { useNavigate } from 'react-router-dom';

export default function MemberButton({ showIcon = true, text }) {
	const navigate = useNavigate();

	const handleMemberButton = () => {
		// Analytics
		ReactGA.event({
			category: 'Join Member',
			action: 'Click to register for membership',
		});

		navigate('/app');
	};

	return <Button text={text} icon={showIcon ? penIcon : undefined} handleClickButton={handleMemberButton} />;
}
