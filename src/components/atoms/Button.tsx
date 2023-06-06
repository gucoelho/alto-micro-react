import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) =>
    <button {...rest} className="bg-amber-500 p-1 px-3 text-white uppercase text-xs">{children}</button>

export default Button