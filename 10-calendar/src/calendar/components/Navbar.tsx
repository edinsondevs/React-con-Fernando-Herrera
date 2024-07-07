
export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4 text-white">
            <span className="navbar-brand h1 text-white">
                <i className="fas fa-calendar-alt "></i>
                &nbsp;
                Navbar 
            </span>

            <button className="btn btn-outline-warning " >
                <i className="fas fa-sign-out-alt">&nbsp;  </i>
                <span>Salir</span>
            </button>
        </div>
    )
}
