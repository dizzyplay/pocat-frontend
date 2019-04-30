import React from "react";
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";

export const CustomError = () => {
  return (
    <Container>
      <MessageContainer>
        <Message>
          유저인증 정보오류
          <br /> 메인으로 이동합니다
        </Message>
      </MessageContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MessageContainer = styled.div`
  ${(props: mytheme) => props.theme.shadowBox};
  padding: 20px;
  width: 400px;
  text-align: center;
`;

const Message = styled.h3`
  font-size: 24px;
  color: ${(props: mytheme) => props.theme.blue};
  line-height: 1.8;
`;
