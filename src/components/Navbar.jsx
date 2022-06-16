import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='title-app'>League of Legends Data</h1>
            <nav>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/ranking">Ranking</NavLink>

            </nav>
        </div>
    )
}

export default Navbar
