import React, { Component } from "react"

export default function ProjectsItemImage({ alt, demoUrl, imgSrc, className }) {
  return (
    <div className={`col9 col-screenshot ${className || ""}`}>
      <a href={demoUrl} target="_blank">
        <div className="project-screenshot">
          {imgSrc && <img src={imgSrc} />}
        </div>
      </a>
    </div>
  )
}
