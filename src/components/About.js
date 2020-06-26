import React from "react"
import Divider from "./Divider"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import headshot from "../images/headshot-with-shadow.png";

export default function About() {
  const images = useStaticQuery(
    graphql`
      query {
        rockHand: file(relativePath: { eq: "rock-hand.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 225) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        headshot: file(relativePath: { eq: "headshot-with-shadow.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 225) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `,
  );

  return (
    <section name="about" className="row about-section">
      <div className="col6 col-about col-about-left">
        <img className="about-image" src={headshot} alt="headshot"/>
        <div className="about-image-container">
          <BackgroundImage
            Tag="div"
            className={"about-rockhand-image"}
            fluid={images.rockHand.childImageSharp.fluid}
          />
        </div>
      </div>
      <div className="col6 col-about col-about-right">
        <Divider alias="about" name="about" title="about me" topBottom/>
        <div className="about-text">
          <p className="about-bio">
            I'm a technically oriented fullstack/fronted developer with a passion for building rich and deeply interactive web applications. I particularly enjoy working with application state libraries like Redux. My ultimate career goal is to work on software that helps bring the world to 100% renewable energy. When I manage to peel myself away from my latest software projects I'm usually rock climbing or hiking in the redwoods.
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
  )
}
