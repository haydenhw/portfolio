import React from 'react';
import classNames from 'classnames';

export default function ContactLinks({alias, isTop, hideEmail}) {
  const contactLinkBaseClass = classNames(
    'contact-link',
    `${alias}-contact-link`, {
      'is-top': isTop,
    });

  const githubLinkClass = classNames(contactLinkBaseClass, 'icon-github');
  const linkedInLinkClass = classNames(contactLinkBaseClass, 'icon-linkedin');
  const mailLinkClass = classNames(contactLinkBaseClass, 'icon-mail');

  return (
    <div className={`contact-links ${alias}-contact-links`}>
      <a className={githubLinkClass} href="https://github.com/haydenhw" target="_blank"/>
      <a
        className={linkedInLinkClass}
        target="_blank"
        href="https://www.linkedin.com/in/hayden-harkwright-2588b254"
      />
      {!hideEmail &&
      <a className={mailLinkClass} href="mailto:hayden321@gmail.com" target="_blank"/>
      }
    </div>
  );
}
