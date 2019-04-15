import React, { useEffect } from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";
import CatInfo from "../Components/CatInfo";
import { useQuery } from "react-apollo-hooks";
import { MY_CAT_LIST } from "../Components/CatList";

const Wrapper = styled.div`
  margin: 0;
`;

const Home = () => {
  return (
    <Wrapper>
      <Navigation />
      <CatInfo />
    </Wrapper>
  );
};

export default Home;
