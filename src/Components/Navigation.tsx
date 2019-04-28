import React from "react";
import styled from "styled-components";
import { MenuIcon } from "./Icons";
import CatList from "./CatList";
import { mytheme } from "../Styles/Theme";

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 58px;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid;
  border-color: ${(props: mytheme) => props.theme.grey200};
  z-index: 1;
  background: white;
`;

const Logo = styled.div`
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #5aa3ff;
`;
const HeaderColumn = styled.div`
  width: 100px;
  text-align: center;
`;

const Header = styled.div`
  width: 900px;
  max-width: ${(props: mytheme) => props.theme.maxWidth};
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
      <Header>
        <HeaderColumn>
          <MenuIcon color={"#5aa3ff"} />
        </HeaderColumn>
        <Logo>POCAT</Logo>
        <CatListContainer>
          <CatList catList={props.catList} />
        </CatListContainer>
      </Header>
    </Container>
  );
};
