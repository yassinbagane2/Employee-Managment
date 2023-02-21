import React from "react";
import textInputProps from "../../interfaces/TextInputProps";
const TextInput: React.FC<textInputProps> = ({
  onChange,
  onBlur,
  type,
  name,
  value,
  label,
  placeholder,
  disabled,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize" htmlFor={name}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled || false}
        className={`border bg-gray-50 py-2 pl-2 outline-none ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextInput;
