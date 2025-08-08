import React from 'react'
import './Menubar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={assets.logo} alt='' className='logo' height={28} width={28} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="menubar-right">
                        <div className="position-relative">
                            <img src={assets.cart} alt="" height={28} width={28} className='position-relative' />
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>5</span>
                        </div>
                    </div>
                    <div className="menubar-user">
                        <button className='btn btn-outline-primary'> Login</button>
                        <button className='btn btn-outline-success'> Register</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menubar;