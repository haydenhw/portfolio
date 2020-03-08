import React, { Component } from "react"
import Img from "gatsby-image"

export default function ProjectsItemImage({ alt, demoUrl, imgData, className }) {
  return (
    <div className={`col9 col-screenshot ${className || ""}`}>
      <a href={demoUrl}>
        <div className="project-screenshot">
          {imgData && <Img fluid={imgData} placeholderStyle={{ filter: "blur(20px)" }} />}
        </div>
      </a>
    </div>
  )
}
