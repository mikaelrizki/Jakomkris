import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import './style.css'
import Loading from '../../assets/image/loading.gif'

const Gereja = () => {
	const config = {
		headers: { Authorization: "Bearer " + sessionStorage.getItem('token') },
	};

	const [gerejaData, setGerejaData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try{
				const res = await axios.get(process.env.REACT_APP_API_KEY + "api/churches", config);
                setGerejaData(res.data);
                setLoading(false);
			} catch (err) {
                setError("Failed to fetch data");
                setLoading(false);
            }
		};
		
		fetchData();
	}, []);

	console.log(gerejaData);

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

	return (
		<div>
			<h1>Data Gereja</h1>
			<input
				type="text"
				placeholder="Search..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}></input>

			{gerejaData
				.filter((gereja) => {
					const name = gereja.properties.name.toLowerCase().includes(searchQuery.toLowerCase());
					const address = gereja.properties.address.toLowerCase().includes(searchQuery.toLowerCase());
					const province = gereja.properties.address.toLowerCase().includes(searchQuery.toLowerCase());
					return name||address||province;
					})
				.map((gereja) => (
					<div key={gereja._id} className="container">
						<div className="gereja">
							<p>Nama Gereja: {gereja.properties.name}</p>
							<p>Alamat: {gereja.properties.address}</p>
							<p>Provinsi: {gereja.properties.province}</p>
							<hr />
						</div>
					</div>
				))}
		</div>
	);
};

export default Gereja;