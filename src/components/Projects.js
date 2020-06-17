import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import ProjectItemDescription from './ProjectItemDescription';
import ProjectItemImage from './ProjectItemImage';

export default function Projects() {
  const projectMockups = useStaticQuery(
    graphql`
      query {
        pcbflow: file(relativePath: { eq: "pcb-flow-mockup-original.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        pomtracker: file(relativePath: { eq: "pomtracker-mockup.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        anki: file(relativePath: { eq: "anki-assistant-mockup.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );
  return (
    <section name="projects-section" className="project-section" >
      <div className="row project-row pcb-flow-row">
        <div className="project-item" >
          <ProjectItemImage
            alt="project demo item"
            imgData={projectMockups.pcbflow.childImageSharp.fluid}
            demoUrl="https://pcbflow.haydenhw.com"
          />
          <ProjectItemDescription
            alias="pcb-flow"
            demoUrl="https://pcbflow.haydenhw.com"
            clientUrl="https://github.com/haydenhw/pcbflow-client"
            serverUrl="https://github.com/haydenhw/pcbflow-server"
            title="PCB Flow"
            techIcons={["react", "sass", "nodejs", "postgres"]}
            description="A drag and drop tool for designing electronic devices. Tailored specifically to make electronics design accessible and approachable for non-engineers."
          />
        </div>
      </div>
      <div  className="row project-row pomtracker-row">
        <div className="project-item" >
          <ProjectItemImage
            alt="project demo item"
            className="pomtracker-mockup-sm-screen"
            imgData={projectMockups.pomtracker.childImageSharp.fluid}
            demoUrl="https://pomtracker.haydenhw.com/"
          />
          <ProjectItemDescription
            alias="pomtracker"
            demoUrl="https://pomtracker.haydenhw.com/"
            clientUrl="https://github.com/haydenhw/pomtracker-client"
            serverUrl="https://github.com/haydenhw/pomtracker-server"
            title="Pomtracker"
            techIcons={["react", "sass", "nodejs", "postgres"]}
            description="A Pomodoro timer with integrated time tracking. I built this app with my own use in mind as I struggled to find existing tools for time tracking and the Pomodoro system that worked for me. I use this app every day to manage my Pomodoro sessions and keep my weekly productivity goals on track."
          />
          <ProjectItemImage
            alt="project demo item"
            className="pomtracker-mockup-lg-screen"
            imgData={projectMockups.pomtracker.childImageSharp.fluid}
            demoUrl="https://pomtracker.haydenhw.com/"
          />
        </div>
      </div>
      <div className="row project-row anki-assistant-row">
        <div className="project-item" >
          <ProjectItemImage
            alt="project demo item"
            imgData={projectMockups.anki.childImageSharp.fluid}
            demoUrl="http://anki.haydenhw.com/"
          />
          <ProjectItemDescription
            alias="anki-assistant"
            demoUrl="http://anki.haydenhw.com/"
            repoUrl="https://github.com/hayden7913/AnkiAssistant"
            title="AnkiAssistant"
            techIcons={["jquery", "sass"]}
            description="AnkiAssistant leverages the Globse language dictionary API to create a user interface that streamlines making custom Spanish language vocabulary flash card decks on Anki, the excellent spaced repetition based flash card platform."
          />
        </div>
      </div>
    </section>
  );
}
