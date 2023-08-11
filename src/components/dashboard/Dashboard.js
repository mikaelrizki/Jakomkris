/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css"
import Loading from '../../assets/image/loading.gif';
import React, { useState, useEffect } from "react"
import axios from "axios"
import OverviewChart from "./OverviewChart.js"

export default function Dashboard() {
    const config = {
		headers: { Authorization: "Bearer " + sessionStorage.getItem('token') },
	};

    const [overviewData, setOverviewData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_KEY+"api/overview", config)
                setOverviewData(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setLoading(false);
            }
        };

        fetchData();
	}, []);

	if (loading) {
        return <div style={{
            width:'100vw', 
            height:'100vh',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }} ><img src={Loading} alt='loading' style={{
                width:'50px',
                display:'inline-block',
                verticalAlign: 'middle',
            }} ></img></div>;
    }

	if (error) {
		return <h1>Error: {error}</h1>;
	}

    var OVData = overviewData[0]

    return <div>
        <div className="cardContainer">
            <div className="card">
                <table>
                    <tr>
                        <td colspan='2'>Total Jumlah Jemaat Terdata</td>
                    </tr>
                    <tr>
                        <td>{OVData.totalCongregation}</td>
                        <td>gambar</td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Jumlah Jemaat Terdata</td>
                    </tr>
                    <tr>
                        <td>{OVData.totalCongregation}</td>
                        <td>gambar</td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Jumlah Jemaat Terdata</td>
                    </tr>
                    <tr>
                        <td>{OVData.totalCongregation}</td>
                        <td>gambar</td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Jumlah Jemaat Terdata</td>
                    </tr>
                    <tr>
                        <td>{OVData.totalCongregation}</td>
                        <td>gambar</td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Jumlah Jemaat Terdata</td>
                    </tr>
                    <tr>
                        <td>{OVData.totalCongregation}</td>
                        <td>gambar</td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Jumlah Jemaat Terdata</td>
                    </tr>
                    <tr>
                        <td>{OVData.totalCongregation}</td>
                        <td>gambar</td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="chart">
            <OverviewChart/>
        </div>
    </div>
}