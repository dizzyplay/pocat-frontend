import React from "react";
import styled from "styled-components";
import index from "./index";

interface IProps {
  currentIndex: number;
  indexLength: number;
}

const SliderNav = (props: IProps) => {
  const { currentIndex, indexLength } = props;
  const indexArray = Array.from(new Array(indexLength), (x, idx) => idx + 1);
  console.log(indexArray);
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
  position: fixed;
  top: 200px;
  display: flex;
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
`;

const Circle = styled.div`
  background-color: ${(props: mytheme) => props.theme.blue};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  position: relative;
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
