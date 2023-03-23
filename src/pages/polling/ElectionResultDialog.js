import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";

import ElectionBarChart from "./BarChart";



const ElectionResultDialog = ({open, setOpen, result}) => {
    // const data = {
    //     labels: ["President", "Vice President", "Treasurer"],
    //     datasets: [
    //         {
    //             label: "Candidate A",
    //             count: result.presidentCounts["Candidate A"] ,
    //             backgroundColor: "rgba(75,192,192,0.4)",
    //         },
    //         {
    //             label: "Candidate B",
    //             count: result.presidentCounts["Candidate B"],
    //             backgroundColor: "rgba(255,99,132,0.4)",
    //         },
    //         {
    //             label: "Candidate C",
    //             data: result.vicePresidentCounts["Candidate B"],
    //             backgroundColor: "rgba(54, 162, 235, 0.4)",
    //         },
    //         {
    //             label: "Candidate D",
    //             data: result.vicePresidentCounts,
    //             backgroundColor: "rgba(255, 206, 86, 0.4)",
    //         },
    //         {
    //             label: "Abstain",
    //             data: [3, 2, 1],
    //             backgroundColor: "rgba(255, 159, 64, 0.4)",
    //         },
    //     ],
    // };
    
    // const options = {
    //     scales: {
    //         yAxes: [
    //             {
    //                 ticks: {
    //                     beginAtZero: true,
    //                 },
    //             },
    //         ],
    //     },
    // };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Election Result</DialogTitle>
                <DialogContent>
                    <ElectionBarChart result={result}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ElectionResultDialog;
