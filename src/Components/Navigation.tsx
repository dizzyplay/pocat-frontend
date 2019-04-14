import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { MenuIcon } from "./Icons";
import CatList from "./CatList";

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid;
  align-items: center;
`;

const Menu1 = styled.div`
  width: 160px;
  border: 1px solid;
  text-align: center;
`;

const Logo = styled.div`
  font-family: Avenir;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 3px;
  border: 1px solid;
  color: #5aa3ff;
`;
const HeaderColumn = styled.div`
  width: 100px;
  text-align: center;
  border: 1px solid;
`;

const CatProfile = styled.div`
  width: 157px;
  border: 1px solid;
  text-align: center;
`;

export default () => {
  return (
    <Container>
      <HeaderColumn>
        <MenuIcon color={"#5aa3ff"} />
      </HeaderColumn>
      <Logo>POCAT</Logo>
      <CatProfile>
        <CatList />
      </CatProfile>
    </Container>
  );
};
