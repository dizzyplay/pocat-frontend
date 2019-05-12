import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

interface Props {
  setIndex: (v: number) => void;
}

export default ({ setIndex }: Props) => {
  return (
    <Container>
      <Title size={"32px"} weight={"bold"}>
        야옹이의 정보를 입력해주세요
      </Title>
      <Title size={"16px"}>
        건강한 반려묘를 위해 체중관리는 필수
        <br />
        행복한 야옹이를 위해 포캣에서 건강을 관리하세요
      </Title>
      <div style={{ width: "149px", marginTop: "30px" }}>
        <Button
          title={"정보입력하기"}
          primary={true}
          onClick={() => setIndex(1)}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;

export interface TType extends mytheme {
  size: string;
  weight?: string;
}
export const Title = styled.div`
  color: ${(props: mytheme) => props.theme.blue};
  font-size: ${(props: TType) => props.size};
  font-weight: ${(props: TType) => props.weight};
  line-height: 1.19;
  letter-spacing: -0.6px;
  padding-bottom: 15px;
`;
