import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import BackgroundImage from "gatsby-background-image"

function Hero({ className }) {
  const images = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "lovers-leap-original-min.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        headshot: file(relativePath: { eq: "headshot.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `,
  )

  return (
    <BackgroundImage
      Tag="section"
      className={`${className} hero-section`}
      loading="eager"
      fluid={images.background.childImageSharp.fluid}
      style={{ backgroundPositionY: "0" }}
    >
      <div className="hero-headings-wrapper">
        <div id="headshot" className="hero-headshot">
          <Img
            placeholderStyle={{ filter: "blur(20px)" }}
            style={{ borderRadius: "100%" }}
            fluid={images.headshot.childImageSharp.fluid}
          />
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
    </BackgroundImage>
  )
}

const StyledHero = styled(Hero)`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`

export default StyledHero;
