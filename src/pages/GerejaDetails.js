import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../utils/Utils";

import GerejaDetail from "../components/gerejaDetail/GerejaDetail";

const GerejaDetails = () => {
	if (isTokenExpired()) {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("tokenExpiration");
		// console.log('Token has expired');
	}

	const token = sessionStorage.getItem("token");
	if (token) {
		return (
			<div>
				<NavBar />
				<GerejaDetail />
				<Footer />
			</div>
		);
	} else {
		return <Navigate to="/login" replace={true} />;
	}
};

export default GerejaDetails;
