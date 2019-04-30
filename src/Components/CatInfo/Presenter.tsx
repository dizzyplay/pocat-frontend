import React from "react";
import styled from "styled-components";
import MainCatCard from "../MainCatCard";
import SubCardSet from "../SubCardSet";

type Props = {
  uuid: string;
};

export default (props: Props) => {
  return (
    <Wrapper>
      <MainCatCard uuid={props.uuid} />
      <SubCardSet uuid={props.uuid} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${(props: mytheme) => props.theme.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
