import clsx from "clsx";
import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" ;
  className?: string;
  placeholder?: string;
  icon?: any;
  label: string;
  name: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    type,
    className,
    placeholder = "",
    label,
    icon,
    name,
    error,
  } = props;
  const baseStyle =
    "block w-full pl-10 pr-3 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

  return (
    <div className="mb-8">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          {...props}
          type={type}
          className={clsx(baseStyle, className)}
          placeholder={placeholder}
          id={name}
          name={name}
        />
        {error && (
          <p className="text-red-500 text-[10px] py-2 absolute">* {error}</p>
        )}
      </div>
    </div>
  );
};

export default TextInput;
