import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import NoCat from "./NoCat";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import StepOne from "./StepOne";

interface IProps {
  currentIndex: number;
  setIndex: (args: number) => void;
}

export default (props: IProps) => {
  const { currentIndex, setIndex } = props;
  if (currentIndex === 0) {
    return (
      <>
        <TransitionGroup>
          <CSSTransition timeout={300}>
            <Wrapper>
              <NoCat setIndex={setIndex} />
            </Wrapper>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  } else if (currentIndex === 1) {
    return (
      <Wrapper>
        <StepOne />
        <button onClick={() => setIndex(2)}>다음으로</button>
      </Wrapper>
    );
  } else if (currentIndex === 2) {
    return (
      <Wrapper>
        <button onClick={() => setIndex(0)}>처음으로</button>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <StepOne />
      <button onClick={() => setIndex(0)}>다음으로</button>
    </Wrapper>
  );
};

const slide = keyframes`
  from {
    margin-left: 20px;
    opacity: 0;
  }

  to {
    margin-left:0;
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${slide} 0.3s 1;
`;
