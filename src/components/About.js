import React from "react"
import Divider from "./Divider"

export default function About() {
  return (
    <section name="about" className="row about-section">
      <div className="col6 col-about col-about-left">
        <img className="about-image" src="images/headshot-with-shadow.png" alt="headshot"/>
        <div className="about-image-container">
          <img src="images/rock-hand.png" alt=""/>
        </div>
      </div>
      <div className="col6 col-about col-about-right">
        <Divider alias="about" name="about" title="about me" topBottom/>
        <div className="about-text">
          <p className="about-bio">
            I'm a technically oriented fullstack/frontend developer with a passion for building rich and deeply interactive web applications. I particularly enjoy working with application state libraries like Redux. My ultimate career goal is to work on software that helps bring the world to 100% renewable energy. When I manage to peel myself away from my latest software projects I'm usually rock climbing or hiking in the redwoods.
          </p>
        </div>
      </div>
    </section>
  )
}
