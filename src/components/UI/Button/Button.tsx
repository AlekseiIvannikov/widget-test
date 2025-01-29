import './Button.css';

import React from 'react';

interface ButtonProps {
  type?: 'danger' | 'success' | 'common';
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ type = 'common', children, onClick }: ButtonProps) {
  const buttonClass = `button button-${type}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
