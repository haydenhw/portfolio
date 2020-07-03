import React  from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import ContactLinks from './ContactLinks';

export default function Nav({
  areLinksHidden,
  isTop,
  onMenuClick,
  toggleMenu,
 }) {
  const navClass = classNames('nav', {
    'is-active': !areLinksHidden,
    'has-background': !isTop,
  });

  const navLeftClass = classNames('nav-left', {
    'is-visible': !areLinksHidden
  });

  const menuIconClass = classNames('nav-menu-icon', {
    'icon-menu': areLinksHidden,
    'icon-close': !areLinksHidden,
    'not-top': !isTop,
  });

  const menuItemClass = classNames('nav-menu-item', {
    'not-top': !isTop,
  });

  return (
    <nav className={navClass}>
      <div className="nav-container">
        <div className={navLeftClass}>
          <Link
            className={menuItemClass}
            duration={500}
            onClick={toggleMenu}
            smooth
            spy
            to="home"
          >
            HOME
          </Link>
          <Link className={menuItemClass}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            smooth
            spy
            to="projects"
          >
            PROJECTS
          </Link>
          <Link className={menuItemClass}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            smooth
            spy
            to="about"
          >
            ABOUT
          </Link>
        </div>
        <div className="nav-right">
          <ContactLinks alias="nav" isTop={isTop} />
          <span className={menuIconClass} onClick={onMenuClick}></span>
        </div>
      </div>
    </nav>
  );
}
