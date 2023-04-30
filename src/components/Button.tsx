import React from 'react'
import Alert from './Alert';

interface Props {
    children: string;
    color?: 'primar' | 'secondary' | 'danger';
    onClick: () => void;
}


const Button = ({children, onClick, color}: Props) => {
  return (
    <div>
        <button className={'btn btn-' + color} onClick={onClick}>
          {children}
        </button>
    </div>
  )
}

export default Button
