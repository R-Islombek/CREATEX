import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-left">
            <Link to="/" className="header-logo">
              <img src={Logo} alt="Createx" />
            </Link>

            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <Link to="/about" className="header-link">About Us</Link>
                </li>
                <li className="header-item">
                  <Link to="/courses" className="header-link">Courses</Link>
                </li>
                <li className="header-item">
                  <Link to="/events" className="header-link">Events</Link>
                </li>
                <li className="header-item">
                  <Link to="/blog" className="header-link">Blog</Link>
                </li>
                <li className="header-item">
                  <Link to="/contacts" className="header-link">Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <button type="button" className="header-btn">
              Get consultation
            </button>

            <Link to="/login" className="header-auth">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="6.2"
                  r="3.1"
                  stroke="#424551"
                  strokeWidth="1.5"
                />
                <path
                  d="M3.8 16.5C4.5 13.7 6.9 12 10 12C13.1 12 15.5 13.7 16.2 16.5"
                  stroke="#424551"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Log in / Register</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;