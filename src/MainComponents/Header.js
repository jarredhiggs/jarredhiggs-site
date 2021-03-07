import React from "react"

import { Link, withRouter } from "react-router-dom"

const Header = (props) => {
    return (
        <div className="Header">
            <div id="preName" style={{fontSize:25}}>よろしくお願いします、</div>
            <div id="myName">Jarred Higgs</div>
            <div id="postName" style={{fontSize:25}}>です。</div>
            <div id="navbar">
                <ul id="navbarItems">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><a href="https://linkedin.com/in/jarredhiggs"
                        target="_blank"
                        rel="noreferrer noopener">LinkedIn</a></li>
                    <li>»</li>
                </ul>
                <div id="searchbar">
                    
                </div>
            </div>
        </div>
    )
}

export default Header