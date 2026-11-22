import React from 'react';
import { Link } from 'react-router-dom';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import card4 from './images/card4.png';
import card5 from './images/card5.png';
import card6 from './images/card6.png';
import './Features.css';

const coursesData = [
  {
    id: 1,
    image: card1,
    badge: 'Marketing',
    badgeColor: '#03CEA4',
    title: 'The Ultimate Google Ads Training Course',
    price: '$100',
    author: 'Jerome Bell',
  },
  {
    id: 2,
    image: card2,
    badge: 'Management',
    badgeColor: '#5A87FC',
    title: 'Prduct Management Fundamentals',
    price: '$480',
    author: 'Marvin McKinney',
  },
  {
    id: 3,
    image: card3,
    badge: 'HR & Recruiting',
    badgeColor: '#F89828',
    title: 'HR  Management and Analytics',
    price: '$200',
    author: 'Leslie Alexander Li',
  },
  {
    id: 4,
    image: card4,
    badge: 'Marketing',
    badgeColor: '#03CEA4',
    title: 'Brand Management & PR Communications',
    price: '$530',
    author: 'Kristin Watson',
  },
  {
    id: 5,
    image: card5,
    badge: 'Management',
    badgeColor: '#5A87FC',
    title: 'Business Development Management',
    price: '$400',
    author: 'Dianne Russell',
  },
  {
    id: 6,
    image: card6,
    badge: 'Design',
    badgeColor: '#F52F6E',
    title: 'Graphic Design Basic',
    price: '$500',
    author: 'Guy Hawkins',
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-container">
          {/* Yuqori sarlavha va tugma */}
          <div className="features-header">
            <div className="features-headings">
              <span className="features-subtitle">READY TO LEARN?</span>
              <h2 className="features-title">Featured Courses</h2>
            </div>

            <Link to="/courses" className="features-btn">
              View all courses
            </Link>
          </div>

          {/* 6 ta kurs kartochkasi (2 ustun x 3 qator) */}
          <div className="features-grid">
            {coursesData.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="course-card"
              >
                <div className="course-card__image">
                  <img src={course.image} alt={course.title} />
                </div>

                <div className="course-card__body">
                  <span
                    className="course-card__badge"
                    style={{ backgroundColor: course.badgeColor }}
                  >
                    {course.badge}
                  </span>

                  <h3 className="course-card__title">{course.title}</h3>

                  <div className="course-card__meta">
                    <span className="course-card__price">{course.price}</span>
                    <span className="course-card__divider">|</span>
                    <span className="course-card__author">
                      by {course.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;