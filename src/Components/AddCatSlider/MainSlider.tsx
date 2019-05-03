import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import NoCat from "./NoCat";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import StepOne from "./StepOne";
import { useMutation, useQuery } from "react-apollo-hooks";
import { ADD_CAT, CAT_KINDS_LIST } from "../../Apollo/Queries";

interface IProps {
  currentIndex: number;
  setIndex: (args: number) => void;
}

export default (props: IProps) => {
  const { data } = useQuery(CAT_KINDS_LIST);
  const addCatMutation = useMutation(ADD_CAT);
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
        {data.catKindsList && (
          <StepOne
            catKindsList={data.catKindsList}
            addCatMutation={addCatMutation}
            setIndex={setIndex}
          />
        )}
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
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  animation: ${slide} 0.3s 1;
`;
