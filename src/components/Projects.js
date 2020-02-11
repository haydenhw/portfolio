import React from 'react';
import ProjectItemDescription from './ProjectItemDescription';
import ProjectItemImage from './ProjectItemImage';

export default function Projects() {
  return (
    <section name="projects-section" className="project-section" >
      <div className="row project-row pcb-flow-row">
        <div className="project-item" >
          <ProjectItemImage
            alt="project demo item"
            imgSrc="/images/pcb-flow-mockup-original.png"
            demoUrl="http://pcb-flow.herokuapp.com/"
          />
          <ProjectItemDescription
            alias="pcb-flow"
            repoUrl="https://github.com/hayden7913/bread-pcb-tool"
            title="PCB Flow"
            techIcons={["react", "sass", "nodejs", "mongodb"]}
            description="A drag and drop tool for designing electronic devices. Tailored specifically to make electronics design accessible and approachable for non-engineers."
          />
        </div>
      </div>
      <div  className="row project-row pomtracker-row">
        <div className="project-item" >
          <ProjectItemImage
            alt="project demo item"
            className="pomtracker-mockup-sm-screen"
            imgSrc="/images/pomtracker-mockup.png"
            demoUrl="http://pomtracker.herokuapp.com/"
          />
          <ProjectItemDescription
            alias="pomtracker"
            repoUrl="https://github.com/hayden7913/PomTracker-Capstone"
            title="Pomtracker"
            techIcons={["react", "sass", "nodejs", "mongodb"]}
            description="A Pomodoro timer with integrated time tracking. I built this app with my own use in mind as I struggled to find existing tools for time tracking and the Pomodoro system that worked for me. I use this app every day to manage my Pomodoro sessions and keep my weekly productivity goals on track."
          />
          <ProjectItemImage
            alt="project demo item"
            className="pomtracker-mockup-lg-screen"
            imgSrc="/images/pomtracker-mockup.png"
            demoUrl="http://pomtracker.herokuapp.com/"
          />
        </div>
      </div>
      <div className="row project-row anki-assistant-row">
        <div className="project-item" >
          <ProjectItemImage
            alt="project demo item"
            imgSrc="/images/anki-assistant-mockup.png"
            demoUrl="http://anki-assistant.herokuapp.com/"
          />
          <ProjectItemDescription
            alias="anki-assistant"
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
