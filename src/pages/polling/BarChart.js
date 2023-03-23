import React from 'react';
import BarChart from 'react-easy-bar-chart';

function ElectionBarChart({result}) {
    const {presidentCounts, vicePresidentCounts, treasurerCounts} = result

    console.log(result)
    // console.log(presidentCounts["Candidate A"])
    const presidentData = [
        {
            title: "Candidate A",
            value: presidentCounts["Candidate A"],
            color: "#196f3d",
        },
        {
            title: "Candidate B",
            value: presidentCounts["Candidate B"],
            color: "#a93226",
        },
        {
            title: "Abstain",
            value: presidentCounts["Abstain"],
            color: "#1f618d",
        },
    ];

    const vicePresidentData = [
        {
            title: "Candidate C",
            value: vicePresidentCounts["Candidate C"],
            color: "#596f3d",
        },
        {
            title: "Abstain",
            value: vicePresidentCounts["Abstain"],
            color: "#5f618d",
        },
    ];

    const treasurerData = [
        {
            title: "Candidate D",
            value: treasurerCounts["Candidate D"],
            color: "#296f3d",
        },
        {
            title: "Abstain",
            value: treasurerCounts["Abstain"],
            color: "#29618d",
        },
    ];
    return (
        <div className="App">
            <div className='my-5 font-semibold text-xl'>
                <h2>President</h2>
            </div>
            <BarChart
                xAxis='Candidates'
                yAxis="Votes"
                height={200}
                width={400}
                data={presidentData}
            />
            <div className='my-5 font-semibold text-xl'>
                <h2>Vice President</h2>
            </div>
            <BarChart
                xAxis='Candidates'
                yAxis="Votes"
                height={200}
                width={400}
                data={vicePresidentData}
            />
            <div className='my-5 font-semibold text-xl'>
                <h3>Treasurer</h3>
            </div>
            <BarChart
                xAxis='Candidates'
                yAxis="Votes"
                height={200}
                width={400}
                data={treasurerData}
            />
        </div>
    );
}

export default ElectionBarChart