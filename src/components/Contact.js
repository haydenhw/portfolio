import React from "react"
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <section className="contact-section row">
      <div className="contact-info">
        <h3 className="contact-heading">contact</h3>
        <div className="contact-links">
          <div className="contact-text-links">
            <div className="contact-text-link">
              <span className="contact-text-link-label">email:</span>
              <span className="contact-text-link-value">hayden321@gmail.com</span>
            </div>
            <div className="contact-text-link">
              <span className="contact-text-link-label">location:</span>
              <span className="contact-text-link-value">Oakland, CA</span>
            </div>
          </div>
            <ContactLinks alias="footer" />
        </div>
      </div>
    </section>
  )
}

function oldContact() {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <span className="contact-message">Reach out at </span>
        <a className="contact-link link" href="mailto:hayden321@gmail.com">hayden321@gmail.com</a>
        <div>or</div>
        <div className="contact-links">
          <a
            className="contact-link icon-linkedin"
            href="https://www.linkedin.com/in/hayden-harkwright-2588b254"
          >
          </a>
          <a className="contact-link icon-github" href="https://github.com/hayden7913"></a>
        </div>
      </div>
      <div className="contact-footer">
        <span>Oakland, CA</span>
      </div>
    </div>
  )
}
