import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from "react-chartjs-2"
import ChartDataLabels from 'chartjs-plugin-datalabels'
import React, { useState, useEffect } from "react"
import axios from "axios"

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
)

export default function OverviewChart() {
	const config = {
		headers: { Authorization: "Bearer " + sessionStorage.getItem('token') },
	};

    const [overviewData, setOverviewData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_KEY + "api/chart", config);
                setOverviewData(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setLoading(false);
            }
        };

        fetchData();
    });

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    const data = {
        labels: [
            overviewData[0].province + ' / ' + parseInt(overviewData[0].notReady + overviewData[0].readyEnough + overviewData[0].ready + overviewData[0].veryReady),
            overviewData[1].province + ' / ' + parseInt(overviewData[1].notReady + overviewData[1].readyEnough + overviewData[1].ready + overviewData[1].veryReady)],
        datasets: [{
            label: 'Tidak Siap',
            data: [overviewData[0].notReady, overviewData[1].notReady],
            backgroundColor: [
                'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        }, {
            label: 'Cukup Siap',
            data: [overviewData[0].readyEnough, overviewData[1].readyEnough],
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
            ],
            borderColor: [
                'rgba(255, 26, 104, 1)',
            ],
            borderWidth: 1
        }, {
            label: 'Siap',
            data: [overviewData[0].ready, overviewData[1].ready],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }, {
            label: 'Sangat Siap',
            data: [overviewData[0].veryReady, overviewData[1].veryReady],
            backgroundColor: [
                'rgba(11, 156, 49, 0.2)',
            ],
            borderColor: [
                'rgba(11, 156, 49, 1)',
            ],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
                stacked: true
            }
        },
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                anchor: 'center',
                clamp: true,
                formatter: Math.round,
                font: {
                    weight: 'bold',
                    size: 10
                }
            }
        }
    };

    return <Bar data={data} options={options} style={{ position:'relative', width: '40vw', height: '80vh',
    }}></Bar>

}