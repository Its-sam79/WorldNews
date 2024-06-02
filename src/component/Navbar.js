import React, { useState } from 'react';
import PropTypes from 'prop-types'
import NewsCom from './NewsCom';
import { Link } from "react-router-dom";


export default function Navbar(props) {


    const [textmode, setText] = useState("black");
    const [mode, setMode] = useState('light');

    const togglemode = () => {
        if (mode === 'light') {
            setMode('dark');
            setText("white")
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";

        }
        else {
            setMode('light')
            setText("dark")
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";

        }

    }

  

    return (
        <div>

            <nav className={`navbar navbar-expand-lg bg-${mode} text-${textmode}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand bg-${mode} text-${textmode}`} to="/">Navbar</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className={`nav-link bg-${mode} text-${textmode}`} aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className={`nav-link bg-${mode} text-${textmode}`} to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className={`nav-link bg-${mode} text-${textmode}`} to="/general">General</Link></li>
                                <li className="nav-item"><Link className={`nav-link bg-${mode} text-${textmode}`} to="/health">Health</Link></li>
                                <li className="nav-item"><Link className={`nav-link bg-${mode} text-${textmode}`} to="/science">Science</Link></li>
                                <li className="nav-item"><Link className={`nav-link bg-${mode} text-${textmode}`} to="/technology">Technology</Link></li>
                                <li className="nav-item"><Link className={`nav-link bg-${mode} text-${textmode}`} to="/sports">Sports</Link></li >
                            </ul >
                        </div >
                        <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={togglemode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>

                    </div>
                    </div >
                </div >
            </nav >
        </div >
    )
}


