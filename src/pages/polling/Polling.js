import { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { countVotes, writeVote } from "utils/firebase/polling";
import PollingDialog from "./PollingDialog";
import ElectionResultDialog from "./ElectionResultDialog";

function Polling() {
  const [president, setPresident] = useState("Abstain");
  const [vicePresident, setVicePresident] = useState("Abstain");
  const [treasurer, setTreasurer] = useState("Abstain");
  const [email, setEmail] = useState("");
  const [studentID, setStudentID] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseCode, setResponseCode] = useState();
  const [viewResult, setViewResult] = useState(false);
  const [voteResult, setVoteResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResponseCode(0);
    try {
      const credentials = { email, studentID };
      const options = { president, vicePresident, treasurer };
      await writeVote(credentials, options);

      setEmail("");
      setStudentID("");
      setPresident("Abstain");
      setVicePresident("Abstain");
      setTreasurer("Abstain");
      setResponseCode(200);
    } catch (error) {
      setResponseCode(error.code);
    }
    setLoading(false);
  };

  const handleViewClicked = async (e) => {
    e.preventDefault();

    const result = await countVotes();
    setVoteResult(result);
    setViewResult(true);
  };

  return (
    <>
      <div className="min-h-screen bg-[#CFBBBB] flex flex-col items-center justify-center">
        <div className="bg-white w-2/3 rounded-md p-6 flex flex-col items-center mt-40 mb-10">
          <h1 className="text-center text-primary text-2xl md:text-3xl lg:text-4xl mb-8">
            Gado-Gado Indonesian Students Association of UBC Elections
          </h1>
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#7D0202",
              color: "#FFFFFF",
              display: "inline",
            }}
            sx={{ my: 2 }}
            onClick={handleViewClicked}
          >
            View Result
          </Button>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <TextField
              id="email"
              label="Email Address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ mt: 1, mb: 3 }}
            />
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
              <FormLabel sx={{ fontWeight: "700", color: "#7D0202" }}>
                President
              </FormLabel>
              <RadioGroup
                row
                aria-label="president"
                name="president"
                value={president}
                onChange={(e) => setPresident(e.target.value)}
              >
                <FormControlLabel
                  value="Candidate A"
                  control={<Radio sx={{ color: "#7D0202" }} />}
                  label="Candidate A"
                />
                <FormControlLabel
                  value="Candidate B"
                  control={<Radio sx={{ color: "#7D0202" }} />}
                  label="Candidate B"
                />
                <FormControlLabel
                  value="Abstain"
                  control={<Radio sx={{ color: "#7D0202" }} />}
                  label="Abstain"
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ mb: 3 }}>
              <FormLabel sx={{ fontWeight: "700", color: "#7D0202" }}>
                Vice President
              </FormLabel>
              <RadioGroup
                row
                aria-label="vice-president"
                name="vice-president"
                value={vicePresident}
                onChange={(e) => setVicePresident(e.target.value)}
              >
                <FormControlLabel
                  value="Candidate C"
                  control={<Radio sx={{ color: "#7D0202" }} />}
                  label="Candidate C"
                />
                <FormControlLabel
                  value="Abstain"
                  control={<Radio sx={{ color: "#7D0202" }} />}
                  label="Abstain"
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ mb: 3 }}>
              <FormLabel sx={{ fontWeight: "700", color: "#7D0202" }}>
                Treasurer
              </FormLabel>
              <RadioGroup
                row
                aria-label="treasurer"
                name="treasurer"
                value={treasurer}
                onChange={(e) => setTreasurer(e.target.value)}
              >
                <FormControlLabel
                  value="Candidate D"
                  control={<Radio sx={{ color: "#7D0202" }} />}
                  label="Candidate D"
                />
                <FormControlLabel
                  value="Abstain"
                  control={<Radio sx={{ color: "#7D0202" }} />}
                  label="Abstain"
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#7D0202",
                color: "#FFFFFF",
                marginTop: "1rem",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <PollingDialog
        loading={loading}
        responseCode={responseCode}
        setResponseCode={setResponseCode}
      />
      <ElectionResultDialog
        open={viewResult}
        setOpen={setViewResult}
        result={voteResult}
      />
    </>
  );
}

export default Polling;
