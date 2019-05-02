import React, { useState } from "react";
import SliderNav from "./SliderNav";
import MainSlider from "./MainSlider";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export default () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>POCAT | HOME</title>
      </Helmet>
      <Wrapper>
        <SliderNav currentIndex={index} indexLength={3} />
        <MainSlider currentIndex={index} setIndex={setIndex} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;
