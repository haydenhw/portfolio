import React from 'react';

import ProjectItemDescription from './ProjectItemDescription';
import ProjectItemImage from './ProjectItemImage';

export default function ProjectItem({
  alt,
  demoUrl,
  imgSrc,
  alias,
  repoUrl,
  title,
  description,
  techIcons,
}) {
  return (
    <div className="row project-row">
      <div className="project-item" >
        <ProjectItemImage
            demoUrl={demoUrl}
            imgSrc={imgSrc}
            alt={alt}
        />
        <ProjectItemDescription
          demoUrl={demoUrl}
          description={description}
          alias={alias}
          repoUrl={repoUrl}
          techIcons={techIcons}
          title={title}
         />
      </div>
    </div>
  );
}
