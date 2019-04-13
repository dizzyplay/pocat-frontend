import React, { useState } from "react";

type onChangeFuncType = (e: { target: HTMLInputElement }) => void;

export interface UseInput {
  value: string;
  onChange: onChangeFuncType;
}

export const useFormInput = (defaultValue: string): UseInput => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e: { target: HTMLInputElement }): void => {
    setValue(e.target.value);
  };
  return { value, onChange: handleChange };
};
