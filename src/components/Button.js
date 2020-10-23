import React from 'react';


const Button = (props) => {
  const {label, onClickFn, theme, icon} = props;

  return (
    <button
      className={`button ${theme ? theme : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClickFn && onClickFn()
      }}
    >
      {icon && icon}
      {label}
    </button>
  );
}

export default Button;