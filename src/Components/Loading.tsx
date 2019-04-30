import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const blink = keyframes`
  from {
    transform: scale(1.3);
    opacity: 0;
  }
  to {
  transform: scale(1);
    background-color: #5aa3ff;
  }
`;
const Load = styled.div`
  animation: ${blink} 800ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: white;
  color: white;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const Center = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => {
  return (
    <Load>
      <Center>POCAT</Center>
    </Load>
  );
};

export default Loading;
