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
		// window.open(
		// 	'https://docs.google.com/forms/d/e/1FAIpQLSdHMPd5oMU9QtgukJYjcuDP1L7uC9t8WjoYIdLVoc0H-Xlmzw/viewform',
		// 	'_blank',
		// 	'noreferrer',
		// );
	};

	return <Button text={text} icon={showIcon ? penIcon : undefined} handleClickButton={handleMemberButton} />;
}
