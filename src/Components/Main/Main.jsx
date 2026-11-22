import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import back from './images/back.png';

const benefits = [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
  'Tincidunt sagittis neque sem ac eget.',
  'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.',
];

const Main = () => {
  return (
    <section className="main about-section">
      <div className="container">
        <div className="main-container about-container">
          {/* Chap tomondagi rasm */}
          <div className="about-image">
            <img src={back} alt="Why Createx" />
          </div>

          {/* O'ng tomondagi matn va ro'yxat */}
          <div className="about-content">
            <span className="about-subtitle">WHO WE ARE</span>
            <h2 className="about-title">Why Createx?</h2>

            <ul className="about-list">
              {benefits.map((item, index) => (
                <li key={index} className="about-item">
                  <svg
                    className="about-check-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="#FF3F3A"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M5 8.2L7 10.2L11.2 6"
                      stroke="#FF3F3A"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="about-btn">
              More about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;