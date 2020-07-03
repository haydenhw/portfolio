import React, { Component } from 'react';
import { withRouter } from  'react-router';
import { Element } from 'react-scroll';
import About from './About';
import Divider from './Divider';
import Hero from './Hero';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      areLinksHidden: true,
      scrollY: 0,
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
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
    const { pathname } = this.props.history.location;

    return (
      <Element name="home">
       <Nav
          areLinksHidden={areLinksHidden}
          currentRoute={pathname}
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
            <Divider alias="about-mobile" name="about" title="about me" topBottom />
            <About />
          </Element>
          {/*<div className={'about-spacer-temp-delete'} style={{height: '150px', background: 'rgba(0,0,0,0)'}}/>*/}
          {/*<div className={'about-spacer-temp-delete'} style={{height: '150px', background: 'black'}}/>*/}
        </main>
        <Contact />
      </Element>
    );
  }
}

export default withRouter(LandingPage);
