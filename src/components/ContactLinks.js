import React from 'react';
import classNames from 'classnames';

export default function ContactLinks({ alias, isTop }) {
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
      <a className={githubLinkClass} href="https://github.com/hayden7913"></a>
      <a
        className={linkedInLinkClass}
        href="https://www.linkedin.com/in/hayden-harkwright-2588b254"
      >
      </a>
      <a className={mailLinkClass} href="mailto:hayden321@gmail.com"></a>
    </div>
  );
}
