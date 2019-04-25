import React, { useEffect } from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";
import CatInfo from "../Components/CatInfo";
import { useMutation, useQuery } from "react-apollo-hooks";
import { MY_CAT_LIST } from "../Queries/Cat";
import Loading from "../Components/Loading";
import { GET_CURRENT_CAT, SET_CURRENT_CAT } from "../Apollo/Queries";

const Wrapper = styled.div`
  margin: 0;
`;

const Home = () => {
  const { data, loading } = useQuery(MY_CAT_LIST);
  if (loading) return <Loading />;
  else if (data.myCatList) {
    const { myCatList } = data;
    return (
      <Wrapper>
        <Navigation catList={myCatList} />
        <CatInfo initCat={myCatList[0]} />
      </Wrapper>
    );
  } else return <Loading />;
};

export default Home;
