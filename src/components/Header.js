import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <div className="header-container">
                <Link to="/" className="futurero-logo">
                    <img className="logo" src="/images/futurero.png" alt="Logo" />
                </Link>
                <h3>Futurero 2023</h3>
            </div>
        </>
    )
}

export default Header