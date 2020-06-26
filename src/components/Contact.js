import React from "react"
import ContactLinks from "./ContactLinks";
import logoWhite from "../images/logo-white.svg";

export default function Contact() {
  return (
    <section className="contact-section row">
      <div className="contact-logo contact-col col-contact-left col6">
        <img className="contact-logo-image" src={logoWhite} alt="logo"/>
      </div>
      <div className="contact-info contact-col col-contact-right col6">
        <h3 className="contact-heading">contact</h3>
        <div className="contact-links">
          <div className="contact-text-links">
            <div className="contact-text-link">
              <span className="contact-text-link-label">email:</span>
              <a href="mailto:hayden321@gmail.com" className="contact-text-link-value contact-email-link" target="_blank">
                hayden321@gmail.com
              </a>
            </div>
            <div className="contact-text-link">
              <span className="contact-text-link-label">location:</span>
              <span className="contact-text-link-value">Oakland, CA</span>
            </div>
          </div>
            <ContactLinks alias="footer" hideEmail/>
        </div>
      </div>
    </section>
  );
}

