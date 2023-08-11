import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { isTokenExpired } from "../utils/Utils";
import "../components/register/style.css";
import axios from "axios";
import LogoJakomkris from "../assets/image/logo_jakomkris.png";
import User from "../assets/icon/ic_user.png";
import Email from "../assets/icon/ic_email.png";
import Password from "../assets/icon/ic_pass.png";
import Swal from "sweetalert2";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				process.env.REACT_APP_API_KEY + "api/register",
				{
					username,
					email,
					password,
				}
			);

			if (response.data.message === "success") {
				Swal.fire({
					icon: "success",
					title: "Registrasi Berhasil",
					text: response.data.data,
					confirmButtonColor: "#03689f",
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Registrasi Gagal",
					text: response.data.data,
					confirmButtonColor: "#03689f",
					iconColor: "#E15E21",
				});
			}
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Registrasi Gagal",
				text: error.response.data.data,
				confirmButtonColor: "#03689f",
				iconColor: "#E15E21",
			});
		}
	};

	if (isTokenExpired()) {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("tokenExpiration");
		// console.log('Token has expired');
	}

	const token = sessionStorage.getItem("token");
	if (token) {
		return <Navigate to="/" replace={true} />;
	} else {
		return (
			<div className="registerCard">
				<img
					src={LogoJakomkris}
					id="register"
					alt="Logo JAKOMKRIS"
					draggable="false"
				/>
				<form onSubmit={handleSubmit} className="registerForm">
					<div className="formField">
						<div className="icon">
							<img
								src={User}
								className="iconRegister"
								alt="Icon User"
								draggable="false"
							/>
						</div>
						<input
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>

					<div className="formField">
						<div className="icon">
							<img
								src={Email}
								className="iconRegister"
								alt="Icon E-mail"
								draggable="false"
							/>
						</div>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className="formField">
						<div className="icon">
							<img
								src={Password}
								className="iconRegister"
								alt="Icon Password"
								draggable="false"
							/>
						</div>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button id="btnRegister" type="submit">
						SIGN UP
					</button>
					<p className="bpa">
						Sudah Punya Akun? <Link to="/login">Sign In</Link>
					</p>
				</form>
			</div>
		);
	}
};

export default Register;
