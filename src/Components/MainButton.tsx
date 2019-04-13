import React, { FunctionComponentElement, ReactElement } from "react";
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";

interface divprops {
  primary: boolean;
  size: string;
  theme: {
    [key: string]: any;
  };
}

const Button = styled.button`
  width: ${(props: divprops) => props.size};
  height: 50px;
  margin-bottom: 15px;
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
  size: string;
}
const defaultProps: any = {
  background: "#FFFFFF",
  size: "350px"
};

export const MainButton = (props: ButtonProps) => {
  const private_props: ButtonProps = { ...defaultProps, ...props };
  return (
    <Button primary={private_props.primary} size={private_props.size}>
      {private_props.title}
    </Button>
  );
};

MainButton.defaultProps = defaultProps;
