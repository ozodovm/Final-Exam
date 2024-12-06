"use client";

import React from 'react';

type InputType = {
    type: "text" | "email" | "password";
    name: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    extraStyle?: string;
    value?: string;
}

const Input: React.FC<InputType> = ({ name, placeholder, type, onChange, onBlur, extraStyle, value }) => {
  return (
    <input 
      value={value}
      autoComplete='off' 
      onBlur={onBlur} 
      onChange={onChange}  
      type={type} 
      name={name} 
      placeholder={placeholder}
      className={`bg-white border border-gray-400 rounded-lg text-sm p-3 w-full outline-none ${extraStyle}`}
    />
  );
}

export default Input;
