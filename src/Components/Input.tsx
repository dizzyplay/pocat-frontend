import React from "react";
import styled from "styled-components";

const Container = styled.input`
  width: 100%;
  height: 23px;
  font-size: 14px;
  font-weight: 400;
  border: ${(props: mytheme) => `solid 1px ${props.theme.grey400}`};
  border-radius: ${(props: mytheme) => props.theme.borderRadius};
  color: ${(props: mytheme) => props.theme.black};
  &:active {
  }
  ,
  &:focus {
    outline: none;
  }
  padding: 20px;
  box-sizing: border-box;
`;

interface inputType {
  label: string;
  required: boolean;
  type: string;
  value: string;
  onChange: (e: { target: HTMLInputElement }) => any;
}

export const Input = ({
  label,
  required = true,
  onChange,
  value,
  type
}: inputType) => {
  return (
    <Container
      onChange={onChange}
      required={required}
      type={type}
      value={value}
      placeholder={label}
    />
  );
};
