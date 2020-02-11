import React from 'react';

export default function Contact() {
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
  );
}
