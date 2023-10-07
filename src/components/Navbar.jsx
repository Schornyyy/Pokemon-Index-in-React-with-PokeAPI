import React, { Component } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Home from '../sites/Home';
import App from '../App';
import Searchbar from './Searchbar';


class Navbar extends Component {
    state = { 
     }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to={"/"} className='navbar-brand'>Startseite</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-self-end">
                        <li className="nav-item">
                            <Searchbar/>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;