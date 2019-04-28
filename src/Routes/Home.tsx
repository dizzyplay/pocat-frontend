import React from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";
import CatInfo from "../Components/CatInfo";
import { useMutation, useQuery } from "react-apollo-hooks";
import { MY_CAT_LIST } from "../Queries/Cat";
import Loading from "../Components/Loading";
import { CHECK_LOGIN, LOCAL_USER_LOGOUT } from "../Apollo/Queries";
import { CustomError } from "../Components/CustomError";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  } else if (loading) return <Loading />;
  else {
    return <LoginCheck />;
  }
};

const LoginCheck = () => {
  const { data, error, loading } = useQuery(CHECK_LOGIN);
  const logoutMutation = useMutation(LOCAL_USER_LOGOUT);
  if (loading) {
    return <Loading />;
  } else if (error) {
    setTimeout(async () => {
      await logoutMutation();
    }, 2000);
    return <CustomError />;
  }
  return null;
};

export default Home;
