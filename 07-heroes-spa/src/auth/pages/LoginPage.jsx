import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	
	const onLogin = () => {
		login('Edinson Madrid');
		navigate("/", {
			replace: true,
		});
	};

	return (
		<div className='container mt-5'>
			<h1>LoginPage</h1>
			<hr />
			<button
				type='button'
				className='btn btn-outline-primary'
				onClick={onLogin}>
				Login
			</button>
		</div>
	);
};
