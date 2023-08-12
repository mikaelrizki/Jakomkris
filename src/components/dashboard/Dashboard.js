/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css"
import Loading from '../../assets/image/loading.gif'
import React, { useState, useEffect } from "react"
import axios from "axios"
import OverviewChart from "./OverviewChart.js"
import church from '../../assets/image/church.png'
import disaster from '../../assets/image/disaster.png'

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
                        <td><img src={church} alt="jemaat" className='cardImg'></img></td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Gereja Terkena Dampak Gempa Terkini</td>
                    </tr>
                    <tr>
                        <td>{OVData.totalEarthquake}</td>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/1684/1684355.png" alt="jemaat" className='cardImg'></img></td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Rencana Kesiapsiagaan Gereja</td>
                    </tr>
                    <tr>
                        <td>{OVData.churchPreparedness}</td>
                        <td><img src="https://traumainformedoregon.org/wp-content/uploads/2018/12/Agency-Readiness-Icon.png" alt="jemaat" className='cardImg'></img></td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Jumlah Indikator Bencana Alam</td>
                    </tr>
                    <tr>
                        <td>{OVData.numberIndicators}</td>
                        <td><img src={disaster} alt="bencana" className='cardImg' id='imgDisaster'></img></td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Gereja Siap Dalam Segi Bangunan</td>
                    </tr>
                    <tr>
                        <td>{OVData.churchBuilding}</td>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/1191/1191591.png" alt="jemaat" className='cardImg'></img></td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Gereja Siap Dalam Segi Kesadaran</td>
                    </tr>
                    <tr>
                        <td>{OVData.churchAwareness}</td>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/1999/1999231.png" alt="jemaat" className='cardImg'></img></td>
                    </tr>
                </table>
            </div>
            <div className="card">
                <table>
                    <tr>
                        <td>Total Gereja Siap Dalam Segi Team</td>
                    </tr>
                    <tr>
                        <td>{OVData.churchTeam}</td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPNoaLuPMHnWLJM-HOPXompZz6MGAB6gJpg&usqp=CAU" alt="jemaat" className='cardImg'></img></td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="chart">
            <OverviewChart/>
        </div>
    </div>
}