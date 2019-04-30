import React from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";
import CatInfo from "../Components/CatInfo";
import Loading from "../Components/Loading";
import NoCat from "../Components/NoCat";
import { MY_CAT_LIST } from "../Queries/Cat";
import { useQuery } from "react-apollo-hooks";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { data, loading } = useQuery(MY_CAT_LIST);
  console.log(data);
  if (loading) return <Loading />;
  else if (data.myCatList.length === 0) {
    return <NoCat />;
  } else if (data.myCatList) {
    const { myCatList } = data;
    return (
      <Wrapper>
        <Navigation catList={myCatList} />
        <CatInfo initCat={myCatList[0]} />
      </Wrapper>
    );
  } else if (loading) return <Loading />;
  else {
    return null;
  }
};

export default Home;
