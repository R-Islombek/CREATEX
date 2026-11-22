import React from 'react';
import { Link } from 'react-router-dom';
import Small from './images/small.png';
import Right from "./images/right.png"
import './Hero.css';

const Hero = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main-container">
          <div className="hero-top">
            <div className="hero-content">
              <button type="button" className="hero-play">
                <span className="hero-play-circle">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 7.13397C14.1667 7.51888 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833333 16.1791 0 15.698 0 14.9282L0 1.0718C0 0.301997 0.833333 -0.179128 1.5 0.205772L13.5 7.13397Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="hero-play-text">Play showreel</span>
              </button>

              <h1 className="hero-title">
                Enjoy studying <br />
                with Createx <br />
                Online Courses
              </h1>

              <div className="hero-actions">
                <Link to="/about" className="hero-btn-outline">
                  About us
                </Link>
                <Link to="/courses" className="hero-btn-primary">
                  Explore courses
                </Link>
              </div>
            </div>

            <div className="hero-image">
              <img src={Right} alt="Enjoy studying with Createx Online Courses" />
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-number">1200</span>
              <span className="hero-stat-label">Students graduated</span>
            </div>

            <span className="hero-stat-dot" aria-hidden="true"></span>

            <div className="hero-stat-item">
              <span className="hero-stat-number">84</span>
              <span className="hero-stat-label">Completed courses</span>
            </div>

            <span className="hero-stat-dot" aria-hidden="true"></span>

            <div className="hero-stat-item">
              <span className="hero-stat-number">16</span>
              <span className="hero-stat-label">Qualified tutors</span>
            </div>

            <span className="hero-stat-dot" aria-hidden="true"></span>

            <div className="hero-stat-item">
              <span className="hero-stat-number">5</span>
              <span className="hero-stat-label">Years of experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-decor-arrows" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="hero-decor-semi" aria-hidden="true"></div>
    </main>
  );
};

export default Hero;