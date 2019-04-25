import React from "react";
import styled from "styled-components";
import { MenuIcon } from "./Icons";
import CatList from "./CatList";

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Menu1 = styled.div`
  width: 160px;
  border: 1px solid;
  text-align: center;
`;

const Logo = styled.div`
  font-family: Avenir, serif;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #5aa3ff;
`;
const HeaderColumn = styled.div`
  width: 100px;
  text-align: center;
`;

const CatListContainer = styled.div`
  width: 157px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;

type Props = {
  catList: [];
};

export default (props: Props) => {
  return (
    <Container>
      <HeaderColumn>
        <MenuIcon color={"#5aa3ff"} />
      </HeaderColumn>
      <Logo>POCAT</Logo>
      <CatListContainer>
        <CatList catList={props.catList} />
      </CatListContainer>
    </Container>
  );
};
