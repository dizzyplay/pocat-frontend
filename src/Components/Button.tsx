import React, { FunctionComponentElement, ReactElement } from "react";
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";

interface divprops {
  primary: boolean;
  theme: {
    [key: string]: any;
  };
}

const Container = styled.button`
  width: 100%;
  height: 50px;
  border-radius: ${(props: mytheme) => props.theme.borderRadius};
  color: ${(props: divprops) => (props.primary ? "#ffffff" : "#5aa3ff")};
  transition: all 0.3s;
  border: ${(props: divprops) =>
    props.primary ? props.theme.blue : `1px solid ${props.theme.blue}`};
  background-color: ${(props: divprops) =>
    props.primary ? props.theme.blue : props.theme.white};
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.5px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
`;

interface ButtonProps {
  title: string;
  primary: boolean;
}

export const Button = (props: ButtonProps) => {
  return <Container primary={props.primary}>{props.title}</Container>;
};
