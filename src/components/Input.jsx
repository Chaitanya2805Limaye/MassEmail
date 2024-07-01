<<<<<<< HEAD
import React from 'react';

const Input = ({ type, name, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-grey-400 p-2 mb-2 rounded-md w-full ${className}`}
    />
  );
};

export default Input;
=======
import React from 'react';

function Input({ placeholder, name, type }) {
  return (
    <input
      className="border border-grey-400 p-2 mb-2 rounded-md w-full"
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
}

export default Input;
>>>>>>> 727d961793c51216cbd62d9ce315dcf643d59d09
