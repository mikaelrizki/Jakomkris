import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GerejaDetail() {
	const config = {
		headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
	};

	const { id } = useParams();

	const [gerejaData, setGerejaData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					process.env.REACT_APP_API_KEY + "api/churches/" + id,
					config
				);
				setGerejaData(res.data);
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
		return <h1 style={{ marginLeft: 20 }}>Error: {error}</h1>;
	}

	const properties = gerejaData.properties;
	const geometry = gerejaData.geometry;
	const risks = properties.disasterRisks;

	return (
		<div>
			<div id="title">
				<div id="header">
					<img src={properties.churchImage} alt="church" />
					<h1>{properties.name}</h1>
				</div>
				<small>Updated: {properties.lastUpdate}</small>
			</div>
			<div id="content">
				<div id="kiri">
					<h3>Informasi Gereja</h3>
					<table>
						<tr>
							<td>Alamat</td>
							<td>{properties.address}</td>
						</tr>
						<tr>
							<td>Koordinat</td>
							<td>
								{geometry.coordinates[0]},{" "}
								{geometry.coordinates[1]}
							</td>
						</tr>
						<tr>
							<td>Provinsi</td>
							<td>{properties.province}</td>
						</tr>
						<tr>
							<td>Kongregasi</td>
							<td>{properties.congregation}</td>
						</tr>
						<tr>
							<td>Badan Penanggung</td>
							<td>{properties.competent}</td>
						</tr>
						<tr>
							<td>Peralatan</td>
							<td>{properties.preparednessTools}</td>
						</tr>
						<tr>
							<td>Kesiapan</td>
							<td>{properties.disasterOccurs}</td>
						</tr>
						<tr>
							<td>Kebutuhan Pelatihan</td>
							<td>{properties.trainingNeeds}</td>
						</tr>
						<tr>
							<td>Peningkatan Kapasitas</td>
							<td>{properties.increaseCapacity}</td>
						</tr>
					</table>
				</div>
				<div id="kanan">
					<h3>Resiko Bencana</h3>
					<table>
						{risks.map((risk, index) => (
							<tr key={index}>
								<td>{risk.name}</td>
								<td>
									<div style={{ float: "left" }}>
										{risk.alertLevel.meaning}
									</div>
									<div
										style={{
											height: "5px",
											width: "5px",
											border: "solid 1px black",
											backgroundColor:
												risk.alertLevel.color,
											float: "right",
											padding: "5px",
											marginTop: "6px",
											marginLeft: "6px",
										}}
									/>
								</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</div>
	);
}

export default GerejaDetail;
