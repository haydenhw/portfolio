import React from "react"

function Hero({ className }) {
  return (
    <div className="hero-headings-wrapper">
      <div id="headshot" className="hero-headshot">
        <img src="images/headshot.png" alt=""/>
      </div>
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
  )
}


export default Hero
