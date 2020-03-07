import React, { Component } from 'react';
import { Element } from 'react-scroll';
import About from './About';
import Divider from './Divider';
import Hero from './Hero';
import Nav from './Nav';
import Projects from './Projects';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      areLinksHidden: true,
      scrollY: 0,
      windowWidth: 0 ,
    };
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth })

    window.addEventListener('resize', () => (
      this.setState({ windowWidth: window.innerWidth })
    ));

    window.addEventListener('scroll', () => {
      this.setState({ scrollY: window.scrollY });
    });
  }

  toggleNavLinks = () => {
    const { areLinksHidden } = this.state;

    setTimeout(() =>{
      this.setState({ areLinksHidden: !areLinksHidden});
    }, 0);
  }

  render() {
    const { areLinksHidden, scrollY } = this.state;

    return (
      <Element name="home">
       <Nav
          areLinksHidden={areLinksHidden}
          onMenuClick={this.toggleNavLinks}
          windowWidth={this.state.windowWidth}
          toggleMenu={this.toggleNavLinks}
          isTop={scrollY === 0}
       />
        <Hero />
        <Divider  alias="projects" name="projects" title="projects" />
        <main>
          <Projects />
          <Element name="about">
            <Divider alias="about-mobile" name="about" title="About me" topBottom />
            <About />
          </Element>
        </main>
      </Element>
    );
  }
}

export default LandingPage;
