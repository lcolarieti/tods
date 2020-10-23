import React from 'react';

const Logo = (props) => {
  return (
    <img
      className="logo"
      src={props.src}
      alt={props.alt ? props.alt : ''}
      title={props.title ? props.title : ''}
    />
  );
}

export default Logo;
