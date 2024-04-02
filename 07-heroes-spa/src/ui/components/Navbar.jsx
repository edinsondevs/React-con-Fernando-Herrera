import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
	const navigate = useNavigate();
	const { user, logout } = useContext(AuthContext);
	const onLogout = () => {
		navigate("/login",{
			replace: true,
		});
		logout();
	};
	
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2 fs-5 text'>
			<Link
				className='navbar-brand'
				to='/'>
				Asociaciones
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? "active" : ""} `
						}
						to='/marvel'>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? "active" : ""} `
						}
						to='/dc'>
						DC
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? "active" : ""} `
						}
						to='/search'>
						Search
					</NavLink>
				</div>
			</div>

			<div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end fs-5 text'>
				<ul className='navbar-nav ml-auto'>
					<span className='nav-item nav-link text-warning fw-bold' aria-label="user-logged">
						{user ? user.name : "Invitado"}
					</span>
					<button
						className='nav-item nav-link btn btn-dark'
						onClick={onLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
