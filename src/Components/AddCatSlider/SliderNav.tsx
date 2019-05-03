import React from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
  currentIndex: number;
  indexLength: number;
}

const SliderNav = (props: IProps) => {
  const { currentIndex, indexLength } = props;
  const indexArray = Array.from(new Array(indexLength), (x, idx) => idx + 1);
  return (
    <Container>
      <CrossLineDiv />
      {indexArray.map((n, idx) => (
        <div key={idx}>
          {idx === currentIndex ? (
            <Circle>
              <Text>{n}</Text>
            </Circle>
          ) : (
            <EmptyCircle>
              <Text>{n}</Text>
            </EmptyCircle>
          )}
        </div>
      ))}
    </Container>
  );
};

export default SliderNav;

const Container = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
`;

const fadein = keyframes`
  from {
    background-color:#9ec9ff;
  }

  50%{
    background-color:#5aa3ff;
    
  }
  100%{
    background-color:#9ec9ff;
  }
  
`;

const Circle = styled.div`
  background-color: ${(props: mytheme) => props.theme.blue};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  position: relative;
  animation: ${fadein} 1.5s infinite;
`;

const EmptyCircle = styled.div`
  background-color: white;
  color: ${(props: mytheme) => props.theme.blue};
  border-radius: 50%;
  border: 1px solid ${(props: mytheme) => props.theme.blue};
  width: 50px;
  height: 50px;
  position: relative;
`;

const Text = styled.span`
  font-size: 23px;
  position: absolute;
  top: 12px;
  left: 19px;
`;

const CrossLineDiv = styled.div`
  position: absolute;
  border-bottom: 1px solid ${(props: mytheme) => props.theme.blue};
  width: 100%;
  top: 25px;
  z-index: 0;
`;
