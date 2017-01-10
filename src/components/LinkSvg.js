import React from 'react';

const LinkSvg = ({ link }) => {
  return (
    <a href={link}>
      <svg width="45px" height="45px" viewBox="3 3 18 18">
          <path d="M10.09,15.59 L11.5,17 L16.5,12 L11.5,7 L10.09,8.41 L12.67,11 L3,11 L3,13 L12.67,13 L10.09,15.59 L10.09,15.59 Z M19,3 L5,3 C3.89,3 3,3.9 3,5 L3,9 L5,9 L5,5 L19,5 L19,19 L5,19 L5,15 L3,15 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z" id="Shape" stroke="none" fillOpacity="0.7" fill="#61DAFB" fillRule="evenodd"></path>
      </svg>
    </a>
  )
}

export default LinkSvg;
