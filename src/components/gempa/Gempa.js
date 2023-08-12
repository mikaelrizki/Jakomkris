import axios from "axios";
import React, { useState, useEffect } from "react";
import Location from "../../assets/image/location.png";
import Quake from "../../assets/image/quake.png";
import Loading from "../../assets/image/loading.gif";
import "./style.css";

export default function Gempa() {
	const config = {
		headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
	};
	const [gempaData, setGempaData] = useState([]);
	const [infoGempa, setInfoGempa] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const resData = await axios.get(
					process.env.REACT_APP_API_KEY + "api/gempa",
					config
				);
				const resInfo = await axios.get(
					"https://cuaca-gempa-rest-api.vercel.app/quake"
				);
				setGempaData(resData.data);
				setInfoGempa(resInfo.data);
				setLoading(false);
			} catch (err) {
				setError("Failed to fetch data");
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return (
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div id="loading"></div>
			</div>
		);
	}

	if (error) {
		return <h1 style={{ marginLeft: "20px" }}>Error: {error}</h1>;
	}

	var info = infoGempa.data;

	return (
		<div className="gempa-container">
			<div className="kiri">
				<img src={info.shakemap} alt=""></img>
			</div>
			<div className="kanan">
				<div className="info">
					<b>Informasi Gempa Terkini</b>
					<table>
						<tr>
							<td>Tanggal</td>
							<td>{info.tanggal}</td>
						</tr>
						<tr>
							<td>Jam</td>
							<td>{info.jam}</td>
						</tr>
						<tr>
							<td>Koordinat</td>
							<td>{info.coordinates}</td>
						</tr>
						<tr>
							<td>Lintang</td>
							<td>{info.lintang}</td>
						</tr>
						<tr>
							<td>Bujur</td>
							<td>{info.bujur}</td>
						</tr>
						<tr>
							<td>Magnitude</td>
							<td>{info.magnitude}</td>
						</tr>
						<tr>
							<td>Kedalaman</td>
							<td>{info.kedalaman}</td>
						</tr>
					</table>
					<table>
						<tr>
							<td>
								<img src={Location} alt="Grow" width="50px" />
								<p>Wilayah</p>
							</td>
							<td>
								<span>{info.wilayah}</span>
							</td>
						</tr>
						<tr>
							<td>
								<img src={Quake} alt="Grow" width="50px" />
								<p>Potensi</p>
							</td>
							<td>
								<span>
									{info.potensi} {info.dirasakan}
								</span>
							</td>
						</tr>
					</table>
				</div>
				<div className="daftar">
					<b>Daftar Gereja Terdampak Gempa Terkini</b>
					<table>
						<tr>
							<th>Nama Gereja</th>
							<th>Alamat</th>
						</tr>
						<tr>
							<td>{gempaData[0].name}</td>
							<td>{gempaData[0].address}</td>
						</tr>
						<tr>
							<td>{gempaData[1].name}</td>
							<td>{gempaData[1].address}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
}
