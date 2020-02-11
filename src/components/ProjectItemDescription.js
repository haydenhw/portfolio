import React from 'react';

let iconId = 0;
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const renderTechIcons = techIcons => (
  techIcons.map(iconClassName => (
    <span
      key={iconId++}
      className={`project-tech-icon tech-icon-${iconClassName} tooltip`}
      data-tooltip={capitalize(iconClassName)}
    >
    </span>)
  )
);

export default function ProjectsItemDescription({
  demoUrl,
  description,
  alias,
  repoUrl,
  techIcons,
  title,
}) {
  return (
    <div className="col3 col-description">
      <div className={`project-description-wrapper ${alias}-description-wrapper`}>
        <a className={`project-title theme-color-${alias}`} href={demoUrl}>
          <h1 className="project-title-text">{title}</h1>
          <div className="project-title-divider"/>
        </a>
        <p className="project-description">{description}</p>
        <div className="project-tech-icons">
          {renderTechIcons(techIcons)}
        </div>
        <a className="project-link" href={repoUrl}>Repo</a>
        <span className={`theme-color-${alias}`}> | </span>
        <a className="project-link" href={demoUrl}>Demo</a>
      </div>
    </div>
  );
}
