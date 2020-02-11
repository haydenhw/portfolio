import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';


export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <section className="hero-section">
      <div className="hero-headings-wrapper">
        <div className="hero-headshot">
          <Img fluid={data.headshot.childImageSharp.fluid} />
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
    </section>
  );
}


