import React from "react";
import styled from "styled-components";

type SIZE = "sm" | "md" | "lg";

interface AvatarType {
  size: SIZE;
  url: string;
}

const getSize = (size: SIZE) => {
  let num: number;
  if (size === "sm") num = 32;
  else if (size === "md") num = 50;
  else num = 100;
  return `
    width:${num}px;
    height:${num}px;
   `;
};

const Container = styled.div`
  ${(props: AvatarType) => getSize(props.size)};
  background-image: url(${(props: AvatarType) => props.url});
  background-size: cover;
  background-color: ${(props: mytheme) => props.theme.lightBlue};
  border-radius: 50%;
`;

const Avatar = ({ url, size }: AvatarType) => {
  return <Container url={url} size={size} />;
};

export default Avatar;
