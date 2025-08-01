'use client';
import React from "react";

type InputProps = {
  value: number;
  onChange: (value: number) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      className="p-2 border rounded-md w-full"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder="Enter sales threshold"
    />
  );
};

export default Input;
