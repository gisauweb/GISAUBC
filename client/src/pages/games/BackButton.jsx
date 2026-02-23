import { useNavigate } from 'react-router-dom';

export default function BackButton() {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate('/')}
			className='absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition'
		>
			← Home
		</button>
	);
}
