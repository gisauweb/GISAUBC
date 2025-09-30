import { useState } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { writeVote } from 'libs/firebase/polling';
import LogoSpinning from 'app/shared/components/logo-spinning/LogoSpinning';
import Footer from 'app/shared/components/footer/Footer';
import PollingDialog from './PollingDialog';

function Polling() {
	const isVotingOpen = process.env.REACT_APP_VOTING_OPEN === 'TRUE';
	const [president, setPresident] = useState('Abstain');
	const [vicePresident, setVicePresident] = useState('Abstain');
	const [treasurer, setTreasurer] = useState('Abstain');
	const [email, setEmail] = useState('');
	const [studentID, setStudentID] = useState('');
	const [loading, setLoading] = useState(false);
	const [responseCode, setResponseCode] = useState();

	const handleSubmit = async (event) => {
		event.preventDefault();

		setLoading(true);
		setResponseCode(0);
		try {
			const credentials = { email, studentID };
			const options = { president, vicePresident, treasurer };
			await writeVote(credentials, options);

			setEmail('');
			setStudentID('');
			setPresident('Abstain');
			setVicePresident('Abstain');
			setTreasurer('Abstain');
			setResponseCode(200);
		} catch (error) {
			setResponseCode(error.code);
		}
		setLoading(false);
	};

	return (
		<div className='min-h-[calc(100vh+9rem)] bg-[#CFBBBB] flex flex-col items-center justify-center'>
			{isVotingOpen ? (
				<div className='bg-white w-2/3 rounded-md p-6 flex flex-col items-center mt-44 lg:mt-52 lg:mb-24'>
					<h1 className='text-center text-primary text-2xl md:text-3xl lg:text-4xl mb-8'>
						Gado-Gado Indonesian Students Association of UBC Elections
					</h1>
					<form onSubmit={handleSubmit} className='flex flex-col w-full'>
						<TextField
							id='studentID'
							label='Student ID'
							type='text'
							value={studentID}
							onChange={(e) => setStudentID(e.target.value)}
							variant='outlined'
							fullWidth
							margin='normal'
							sx={{ mt: 1, mb: 3 }}
						/>
						<FormControl sx={{ mb: 3 }}>
							<FormLabel sx={{ fontWeight: '700', color: '#7D0202' }}>President</FormLabel>
							<RadioGroup
								row
								aria-label='president'
								name='president'
								value={president}
								onChange={(e) => setPresident(e.target.value)}
							>
								<FormControlLabel
									value='Imelda Alimin'
									control={<Radio sx={{ color: '#7D0202' }} />}
									label='Imelda Alimin'
								/>
								<FormControlLabel
									value='Jonathan Santoso'
									control={<Radio sx={{ color: '#7D0202' }} />}
									label='Jonathan Santoso'
								/>
								<FormControlLabel
									value='Abstain'
									control={<Radio sx={{ color: '#7D0202' }} />}
									label='Abstain'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl sx={{ mb: 3 }}>
							<FormLabel sx={{ fontWeight: '700', color: '#7D0202' }}>Vice President</FormLabel>
							<RadioGroup
								row
								aria-label='vice-president'
								name='vice-president'
								value={vicePresident}
								onChange={(e) => setVicePresident(e.target.value)}
							>
								<FormControlLabel
									value='Nadya Rei'
									control={<Radio sx={{ color: '#7D0202' }} />}
									label='Nadya Rei'
								/>
								<FormControlLabel
									value='Abstain'
									control={<Radio sx={{ color: '#7D0202' }} />}
									label='Abstain'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl sx={{ mb: 3 }}>
							<FormLabel sx={{ fontWeight: '700', color: '#7D0202' }}>Treasurer</FormLabel>
							<RadioGroup
								row
								aria-label='treasurer'
								name='treasurer'
								value={treasurer}
								onChange={(e) => setTreasurer(e.target.value)}
							>
								<FormControlLabel
									value='Joanico Huang'
									control={<Radio sx={{ color: '#7D0202' }} />}
									label='Joanico Huang'
								/>
								<FormControlLabel
									value='Abstain'
									control={<Radio sx={{ color: '#7D0202' }} />}
									label='Abstain'
								/>
							</RadioGroup>
						</FormControl>
						<Button
							type='submit'
							variant='contained'
							size='large'
							style={{
								backgroundColor: '#7D0202',
								color: '#FFFFFF',
								marginTop: '1rem',
							}}
						>
							Submit
						</Button>
					</form>
				</div>
			) : (
				<div className='min-h-[calc(100vh+9rem)] bg-[#CFBBBB] flex flex-col items-center justify-center'>
					<LogoSpinning />
					<h1 className='text-center text-primary text-2xl md:text-3xl lg:text-4xl mt-8'>
						Voting is now CLOSED!
					</h1>
				</div>
			)}
			<PollingDialog loading={loading} responseCode={responseCode} setResponseCode={setResponseCode} />
			<Footer showPlane={false} />
		</div>
	);
}

export default Polling;
