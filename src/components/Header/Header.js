import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to={"/invitado/home"}>MILENEUR</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"}>Inicio<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/products"}>Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/contact"}>Contacto</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <NavLink type="button" className="btn btn-danger" to={"/session"}>Iniciar Sesión</NavLink>
            </div>
        </nav>
    );
}

export default Header;