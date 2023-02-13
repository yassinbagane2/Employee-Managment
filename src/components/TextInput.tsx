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
}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label className="capitalize" htmlFor={name}>
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="pl-2 py-2 border bg-gray-50 outline-none"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
