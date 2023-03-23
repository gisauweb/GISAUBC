import React from 'react';
import BarChart from 'react-easy-bar-chart';

function ElectionBarChart({result}) {
    const {presidentCounts, vicePresidentCounts, treasurerCounts} = result

    console.log(result)
    const presidentData = [
        {
            title: "Candidate A",
            value: 12,
            color: "#196f3d",
        },
        {
            title: "Candidate B",
            value: 10,
            color: "#a93226",
        },
        {
            title: "Abstain",
            value: 4,
            color: " #1f618d",
        },
    ];

    const vicePresidentData = [
        {
            title: "Candidate C",
            value: 10,
            color: "#196f3d",
        },
        {
            title: "Abstain",
            value: 4,
            color: " #1f618d",
        },
    ];

    const treasurerData = [
        {
            title: "Candidate D",
            value: 12,
            color: "#196f3d",
        },
        {
            title: "Abstain",
            value: 4,
            color: "#1f618d",
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