import React from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";
import { useMutation, useQuery } from "react-apollo-hooks";
import { GET_CURRENT_CAT, SET_CURRENT_CAT } from "../Apollo/Queries";

const Wrapper = styled.div`
  margin: 0;
`;

const Home = () => {
  const { data } = useQuery(GET_CURRENT_CAT);
  const onClick = async () => {
    console.log(data);
  };
  return (
    <Wrapper>
      <Navigation />
      <div onClick={onClick}>Home</div>
      <div>고양이정보</div>
    </Wrapper>
  );
};

export default Home;
