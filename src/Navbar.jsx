import { Avatar, Button, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = ({ logo }) => {
    const [state, setState] = useState({ clicked: false });

    const handelClick = () => {
        setState({ clicked: !state.clicked });
    }
    return (
        <div className="col-md-12 col-12">
            <nav className="navbar navbar-expand-lg navbar-light mt-2">
                <div className="hamburger" onClick={handelClick}>
                    <div className={state.clicked ? "line open" : "line"}></div>
                </div>
                <div className="logo"><IconButton><Avatar src={logo} /></IconButton>REPL</div>
                <ul className={state.clicked ? 'nav-links open' : 'nav-links'}>
                    <li onClick={handelClick} style={{ transition: 'all 0.5s ease 0.2s' }}><NavLink exact activeClassName="active" to="/"><IconButton>Home</IconButton></NavLink></li>

                    <li onClick={handelClick} style={{ transition: 'all 0.5s ease 0.2s' }}><NavLink exact activeClassName="active" to="/about"><IconButton>About</IconButton></NavLink></li>

                    <li onClick={handelClick} style={{ transition: 'all 0.5s ease 0.2s' }}><NavLink exact activeClassName="active" to="/project"><IconButton>Explore</IconButton></NavLink></li>

                    <li onClick={handelClick} style={{ transition: 'all 0.5s ease 0.2s' }}><NavLink exact activeClassName="active" to="/contact"><IconButton>Contact</IconButton></NavLink></li>

                    <li style={{ transition: "all 0.5s ease 0.2s" }}>
                        <Button href="https://repl-board.web.app" color="inherit" size="large" variant="outlined" className="signup">login</Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
