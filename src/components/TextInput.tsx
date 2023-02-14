import React from "react";

interface Props {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({
  onChange,
  type,
  name,
  value,
  placeholder,
  disabled,
  className,
}) => {
  return (
    <div className="mb-3 flex flex-col gap-1">
      <label className="capitalize" htmlFor={name}>
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={`border bg-gray-50 py-2 pl-2 outline-none ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
