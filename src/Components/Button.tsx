import React, { FunctionComponentElement, ReactElement } from "react";
import styled from "styled-components";

interface divprops {
  primary: boolean;
  height: string;
  theme: {
    [key: string]: any;
  };
}

const Container = styled.button`
  width: 100%;
  height: ${(props: divprops) => props.height};
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
  height?: string;
  onClick?: any;
}

export const Button = ({
  title,
  primary = false,
  height = "40px",
  onClick
}: ButtonProps) => {
  return (
    <Container primary={primary} height={height} onClick={onClick}>
      {title}
    </Container>
  );
};
