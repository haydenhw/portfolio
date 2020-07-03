import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-headings-wrapper">
        <img className="hero-headshot" src="images/headshot.png" alt=""/>
        <div className="hero-heading-bar-wrapper">
          <div className="hero-heading-bar">
            <span>HAYDEN HARKWRIGHT</span>
          </div>
          <div className="hero-subheading-bar">
            <span className="hero-subheading-profession">Javascript Developer,  </span>
            <span className="hero-subheading-location">Oakland, California</span>
          </div>
        </div>
      </div>
    </section>
  );
}
