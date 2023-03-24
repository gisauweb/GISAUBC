import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export function ElectionBarChart({result}) {
    const {presidentCounts, vicePresidentCounts, treasurerCounts} = result
    const positions = [
        {
            title: "President Counts", 
            datasets: [
                {
                    label: 'Imelda Alimin',
                    data: [presidentCounts["Imelda Alimin"]],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Jonathan Santoso',
                    data: [presidentCounts["Jonathan Santoso"]],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                },
                {
                    label: 'Abstain',
                    data: [presidentCounts["Abstain"]],
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        },
        {
            title: "Vice President Counts", 
            datasets: [
                {
                    label: 'Nadya Rei',
                    data: [vicePresidentCounts["Nadya Rei"]],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                },
                {
                    label: 'Abstain',
                    data: [vicePresidentCounts["Abstain"]],
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        },
        {
            title: "Treasurer Counts", 
            datasets: [
                {
                    label: 'Joanico Huang',
                    data: [treasurerCounts["Joanico Huang"]],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Abstain',
                    data: [treasurerCounts["Abstain"]],
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        },
    ]

    return (
        <Box className='flex flex-col lg:flex-row justify-between w-[90%] max-h-[50%] bg-white mx-auto mb-20 px-5   '>
            {positions.map((position, i) => {
                const options = {
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: position.title,
                        },
                    },
                    scales: {
                        y: {
                            min: 0,
                            max: 200,
                        }
                    }
                };

                const labels = [""]
                const data = {
                    labels,
                    datasets: position.datasets
                };


                return (
                    <Bar key={i} options={options} data={data} width={"90%"} height={"100%"} />
                )
            })}
        </Box>
    )
}
