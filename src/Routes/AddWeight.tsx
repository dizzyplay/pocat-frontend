import React from "react";
import styled from "styled-components";
import { useFormInput } from "../Hooks/form";

export default (props: any) => {
  const { id } = props.match.params;
  const weight = useFormInput("0");

  const handleKeyup = (e: any) => {
    const re = /^\d{1,2}([.]|[.]\d)?$/;
    if (!re.test(weight.value) && weight.value.length != 0) {
      alert(
        "99이하의 숫자만 입력해주세요(소수점 첫째자리까지) \n 예) 12.3 또는 12 "
      );
      weight.setEmpty();
    }
  };

  return (
    <Container>
      {id}
      <BigText>고양이 몸무게를 입력해주세요</BigText>
      <Divider>
        <BigInput
          {...weight}
          onKeyUp={handleKeyup}
          onClick={() => weight.value == "0" && weight.setEmpty()}
        />
        <BigText>Kg</BigText>
      </Divider>
    </Container>
  );
};

const BigText = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  line-height: 60px;
`;

const BigInput = styled.input`
  text-underline: black;
  width: 150px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  outline: 0;
  border: 0;
  border-bottom: 1px solid black;
`;
