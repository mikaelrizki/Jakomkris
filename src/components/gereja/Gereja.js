import "./style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Gereja = () => {
	const config = {
		headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
	};

	const [gerejaData, setGerejaData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					process.env.REACT_APP_API_KEY + "api/churches",
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
		return <h1>Error: {error}</h1>;
	}

	const filteredGerejaData = gerejaData.filter((gereja) => {
		const name = gereja.properties.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const address = gereja.properties.address
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const province = gereja.properties.province
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return name || address || province;
	});

	return (
		<div className="container-page">
			<h1>Data Gereja</h1>
			<SearchBar
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				onSearch={(query) => setSearchQuery(query)} // Pass the onSearch function
			/>
			<div className="gereja-container">
				{filteredGerejaData.map((gereja) => (
					<Link
						to={"/gereja_detail/" + gereja._id}
						key={gereja._id}
						className="button-card"
						id="link"
					>
						<div className="card">
							<div className="gereja">
								<p>
									<strong>Nama Gereja: </strong>
									{gereja.properties.name}
								</p>
								<p>
									<strong>Alamat: </strong>
									{gereja.properties.address.length > 60
										? gereja.properties.address.substring(
												0,
												60
										  ) + "..."
										: gereja.properties.address}
								</p>
								<p>
									<strong>Provinsi: </strong>
									{gereja.properties.province}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Gereja;
