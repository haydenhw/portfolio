import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import BackgroundImage from "gatsby-background-image"

function Hero({ className }) {
  const images = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "lovers-leap-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920, traceSVG: {
            }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        },
        headshot: file(relativePath: { eq: "headshot.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
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
    >
      <div className="hero-headings-wrapper">
        <div className="hero-headshot">
          <Img fluid={images.headshot.childImageSharp.fluid}/>
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

// background-position: 74% 0;
const StyledHero = styled(Hero)`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`

export default StyledHero;
