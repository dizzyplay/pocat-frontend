import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import NoCat from "../Components/NoCat";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Helmet } from "react-helmet";

export default () => {
  const [index, setIndex] = useState(0);
  if (index === 0) {
    return (
      <>
        <Helmet>
          <title>POCAT | HOME</title>
        </Helmet>
        <TransitionGroup>
          <CSSTransition timeout={300}>
            <Wrapper>
              <NoCat setIndex={setIndex} />
            </Wrapper>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
  return (
    <Wrapper>
      <button onClick={() => setIndex(0)}>slider</button>
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
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  animation: ${slide} 0.3s 1;
`;
