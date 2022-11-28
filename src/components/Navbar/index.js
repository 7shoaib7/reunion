import React from 'react'
import "./styles.css";
import Button from '@mui/material/Button';
import { useState } from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [navText, setNavText] = useState("");
    const [navContent, setNavContent] = useState(["Rent", "Sell", "Buy"]);


    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-log">
                    {/* <img scr={} alt="logo" /> */}
                    <span style={{ color: 'darkslateblue', fontWeight: "600", fontSize: "1.5rem" }}>Estatery</span>
                </div>
                {navContent.map((item) => (
                    <div className={navText === item ? "navbar-text-onclick  navbar-content-box" : "navbar-text-content navbar-content-box"}>
                        <Link to={item.toLowerCase()} className="link"><span onClick={() => setNavText(item)}>{item}</span></Link>
                    </div>
                ))}

            </div>
            <div className="navbar-cta">
                <Button size="small" variant="outlined" style={{ marginRight: "1rem" }} className="login">Login</Button>
                <Button size="small" variant="contained" className="signup">Sign up</Button>
            </div>
        </div>
    )
}

export default Navbar