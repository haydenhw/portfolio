import React from 'react';
import Divider from './Divider';

export default function About() {
  return (
    <section name="about" className="row about-section">
      <div className="col6 col-about col-about-left">
        <img className="about-image" src="/images/headshot-with-shadow.png" alt="headshot"/>
        <div className="about-image-container"/>
      </div>
      <div className="col6 col-about col-about-right">
        <Divider alias="about" name="about" title="About me" topBottom/>
        <div className="about-text">
          <p className="about-bio">
            I take great joy in finding ways to use programming to make life less tedious and more fun.
            I also earnestly look forward to putting web software to use to make meaningful improvements in the quality
            of other's lives and ending suffering in the world.
            Aside from my true obsession with coding, I'm also into rock climbing, meditation, and dark, roasty
            microbrews.
          </p>
          {/*<div className="about-contact-wrapper">*/}
          {/*  <span className="about-contact-message">*/}
          {/*      Get in touch*/}
          {/*    </span>*/}
          {/*  <a className="about-email-link link" href="mailto:hayden321@gmail.com">hayden321@gmail.com</a>*/}
          {/*  <div className="contact">*/}
          {/*    <div className="contact-links">*/}
          {/*      <a className="about-contact-link icon-github" href="https://github.com/hayden7913"/>*/}
          {/*      <a*/}
          {/*        className="about-contact-link icon-linkedin"*/}
          {/*        href="https://www.linkedin.com/in/hayden-harkwright-2588b254"*/}
          {/*      >*/}
          {/*      </a>*/}
          {/*      <a className="about-contact-link icon-mail" href="mailto:hayden321@gmail.com"/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
