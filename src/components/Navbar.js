import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='navbar'>
          <div className="navbar-container">
              <ul className='nav-menu'>
                  <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" >
                Futurero 2023 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" >
                Progress Board <i className='fas fa-caret-down' />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" >
                Resources <i className='fas fa-caret-down' />
              </Link>
            </li>
            <li className="nav-item"
                >
              <Link to="#" className="nav-links">
                Events <i className='fas fa-caret-down' />
              </Link>
            </li>
            <li className="nav-item"
                >
              <Link to="#" className="nav-links">
                FAQs <i className='fas fa-caret-down' />
              </Link>
            </li>
            <li className="nav-item"
                >
              <Link to="#" className="nav-links">
                Competency buddy
              </Link>
            </li>
              </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar