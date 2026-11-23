import React from "react";
import "./Work.css";

const eventsData = [
  {
    id: 1,
    day: "05",
    month: "August",
    time: "11:00 – 14:00",
    title: "Formation of the organizational structure of the company in the face of uncertainty.",
    category: "Online master-class",
    active: false,
  },
  {
    id: 2,
    day: "24",
    month: "July",
    time: "11:00 – 12:30",
    title: "Building a customer service department. Best Practices.",
    category: "Online lecture",
    active: true, // Rasmdagi hover/faol holatdagi 2-karta
  },
  {
    id: 3,
    day: "16",
    month: "July",
    time: "10:00 – 13:00",
    title: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
    category: "Online workshop",
    active: false,
  },
];

const Work = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main-container">
          <div className="events-header">
            <span className="events-subtitle">OUR EVENTS</span>
            <h2 className="events-title">Lectures &amp; workshops</h2>
          </div>

          <div className="events-list">
            {eventsData.map((event) => (
              <article
                key={event.id}
                className={`event-card ${event.active ? "is-featured" : ""}`}
              >
                <div className="event-date">
                  <span className="event-day">{event.day}</span>
                  <div className="event-meta">
                    <span className="event-month">{event.month}</span>
                    <span className="event-time">{event.time}</span>
                  </div>
                </div>

                <div className="event-info">
                  <h3 className="event-heading">{event.title}</h3>
                  <p className="event-category">{event.category}</p>
                </div>

                <button type="button" className="btn-outline">
                  View more
                </button>
              </article>
            ))}
          </div>

          <div className="events-footer">
            <p className="events-footer-text">Do you want more?</p>
            <button type="button" className="btn-primary">
              Explore all events
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Work;