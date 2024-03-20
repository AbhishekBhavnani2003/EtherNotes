import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar(props) {
    const history = useNavigate();
    const Handlelogout = () => {
        localStorage.removeItem('token')
        history('/login')
    }
    let location = useLocation();
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">EtherNotes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">

                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form> : <button className="btn btn-primary mx-1" onClick={Handlelogout}>Logout</button>}
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
                    <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault" />
                    <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>

                </div>

            </div>
        </nav>
    )
}

export default Navbar