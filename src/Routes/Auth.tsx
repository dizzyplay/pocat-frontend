import React from "react";
import { MainButton } from "../Components/MainButton";
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";
import { InputBox } from "../Components/InputBox";

const Container = styled.div`
  max-width: ${(props: mytheme) => props.theme.maxWidth};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #5aa3ff;
  margin-top: 0px;
  margin-bottom: 30px;
`;

const Auth = () => (
  <>
    <Container>
      <SubTitle>건강한 야옹이를 위한 첫걸음</SubTitle>
      <MainButton title={"로그인"} primary={true} size={"280px"} />
      <MainButton title={"회원가입"} primary={false} size={"280px"} />
    </Container>
  </>
);

export default Auth;
