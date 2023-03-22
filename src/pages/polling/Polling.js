import { useState } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { countVotes, writeVote } from 'utils/firebase/polling';
import PollingDialog from './PollingDialog';

function Polling() {
    const [president, setPresident] = useState('');
    const [vicePresident, setVicePresident] = useState('');
    const [treasurer, setTreasurer] = useState('');
    const [studentID, setStudentID] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseCode, setResponseCode] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setResponseCode(0);
        try {
            const options = { president, vicePresident, treasurer }
            const response = await writeVote(studentID, options)
            console.log("response: ", response)

            setStudentID("")
            setPresident("");
            setVicePresident("");
            setTreasurer("");
            setResponseCode(200)
        } catch (error) {
            setResponseCode(error.code)
        }
        setLoading(false);

    };

    const handleViewClicked = async (e) => {
        e.preventDefault();

        const voteResult = await countVotes();
        console.log(voteResult)
    }

    return (
        <>
            <div className="min-h-screen bg-[#CFBBBB] flex flex-col items-center justify-center">
                <div className="bg-white w-1/3 rounded-md p-6 flex flex-col items-center">
                    <Typography variant="h4" sx={{ color: '#7D0202', mb: 3 }}>
                        Gado-Gado Indonesian Students Association of UBC Elections
                    </Typography>
                    <Button variant="contained" size='small' style={{ backgroundColor: '#7D0202', color: '#FFFFFF', display: "none" }} sx={{ my: 2 }} onClick={handleViewClicked}>
                        View Result
                    </Button>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                        <TextField
                            id="studentID"
                            label="Student ID"
                            type="text"
                            value={studentID}
                            onChange={(e) => setStudentID(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            sx={{ mt: 1, mb: 3 }}
                        />
                        <FormControl sx={{ mb: 3 }}>
                            <FormLabel sx={{ fontWeight: '700', color: '#7D0202' }}>President</FormLabel>
                            <RadioGroup row aria-label="president" name="president" value={president} onChange={(e) => setPresident(e.target.value)}>
                                <FormControlLabel value="Imelda Alimin" control={<Radio sx={{ color: '#7D0202' }} />} label="Imelda Alimin" />
                                <FormControlLabel value="Jonathan Santoso" control={<Radio sx={{ color: '#7D0202' }} />} label="Jonathan Santoso" />
                                <FormControlLabel value="Abstain" control={<Radio sx={{ color: '#7D0202' }} />} label="Abstain" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{ mb: 3 }}>
                            <FormLabel sx={{ fontWeight: '700', color: '#7D0202' }}>Vice President</FormLabel>
                            <RadioGroup row aria-label="vice-president" name="vice-president" value={vicePresident} onChange={(e) => setVicePresident(e.target.value)}>
                                <FormControlLabel value="Nadya Rei" control={<Radio sx={{ color: '#7D0202' }} />} label="Nadya Rei" />
                                <FormControlLabel value="Abstain" control={<Radio sx={{ color: '#7D0202' }} />} label="Abstain" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{ mb: 3 }}>
                            <FormLabel sx={{ fontWeight: '700', color: '#7D0202' }}>Treasurer</FormLabel>
                            <RadioGroup row aria-label="treasurer" name="treasurer" value={treasurer} onChange={(e) => setTreasurer(e.target.value)}>
                                <FormControlLabel value="Joanico Huang" control={<Radio sx={{ color: '#7D0202' }} />} label="Joanico Huang" />
                                <FormControlLabel value="Abstain" control={<Radio sx={{ color: '#7D0202' }} />} label="Abstain" />
                            </RadioGroup>
                        </FormControl>
                        <Button type="submit" variant="contained" size='large' style={{ backgroundColor: '#7D0202', color: '#FFFFFF', marginTop: '1rem' }}>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
            <PollingDialog loading={loading} responseCode={responseCode} setResponseCode={setResponseCode}/>
        </>
    );
}

export default Polling;

