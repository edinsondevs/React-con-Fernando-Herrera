import React from "react";
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    
  const navigate = useNavigate()
  const onLogin = () => {
    navigate('/',{
      replace: true,
    })
  };

	return (
		<div className="container mt-5">
			<h1>LoginPage</h1>
			<button
				type='button'
				className='btn btn-outline-primary'
        onClick={onLogin}
      >
				Login
			</button>
		</div>
	);
};
