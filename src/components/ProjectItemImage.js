import React, { Component } from 'react';

export default function ProjectsItemImage({ alt, demoUrl, imgSrc, className }) {
  return (
    <div className={`col9 col-screenshot ${className || ''}`}>
      <a href={demoUrl}>
        <img className="project-screenshot" src={imgSrc} alt={alt}/>
      </a>
    </div>
  );
}
