import React from 'react';

export default function Divider({ alias, name, title, topBottom }) {
  return (
    !topBottom === true
    ? <div   className={`divider divider-${alias}`} name={name}>
        <div className={`divider-line divider-line-${alias}`}></div>
        <div className={`divider-title divider-title-${alias}`}>{title}</div>
      </div>
    : <div className={`divider divider-top-bottom divider-${alias}`} name={name}>
        <div className={`divider-title divider-title-${alias}`}>{title}</div>
        <div className={`divider-line divider-line-${alias}`}></div>
      </div>
  );
}
