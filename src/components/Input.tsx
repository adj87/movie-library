import React, { HTMLInputTypeAttribute } from "react";

interface InputPros {
  value: string | number | undefined;
  label: string;
  onChange: (name: string, value: string | number) => void;
  name: string;
  type?: HTMLInputTypeAttribute;
}

const Input: React.FC<InputPros> = ({ value, label, onChange, name, type }) => {
  return (
    <div className="flex flex-col">
      <label className="text-grey-200 mb-2">{label}</label>
      <input
        className="bg-transparent text-secondary border-grey-500 border-b-2 text-xl"
        value={value}
        name={name}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          onChange(e.currentTarget.name, e.currentTarget.value)
        }
        type={type ?? "text"}
      />
    </div>
  );
};

export default Input;
