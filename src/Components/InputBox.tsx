import React from "react";
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 50px;
  border-radius: ${(props: mytheme) => props.theme.borderRadius};
  border: ${(props: mytheme) => `1px solid ${props.theme.grey300}`};
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 210px;
  height: 19px;
  font-size: 16px;
  border: 0;
  color: ${(props: mytheme) => props.theme.black};
  &:active,
  &:focus {
    outline: none;
  }
  padding-right: 25px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: ${(props: mytheme) => props.theme.grey400};
  padding-left: 25px;
`;

interface inputType {
  label: string;
}
export const InputBox = (props: inputType) => {
  return (
    <Box>
      <Label>{props.label}</Label>
      <Input />
    </Box>
  );
};
