import { useAuthStore } from "../../hooks";

export const Navbar = () => {
    
    const { startLogout, user } = useAuthStore();
        
    return (
		<div className='navbar navbar-dark bg-dark mb-4 px-4 text-white'>
			<span className='navbar-brand h1 text-white'>
				<i className='fas fa-calendar-alt '></i>
				&nbsp; {user.nombre}
			</span>
			<button
				className='btn btn-outline-warning '
				onClick={startLogout}>
				<i className='fas fa-sign-out-alt'>&nbsp; </i>
				<span>Salir</span>
			</button>
		</div>
	);
}
