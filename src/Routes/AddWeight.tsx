import React from "react";
import styled from "styled-components";
import { useFormInput } from "../Hooks/form";
import { Button } from "../Components/Button";
import { useMutation } from "react-apollo-hooks";
import { ADD_CAT_WEIGHT } from "../Apollo/Queries";

export default (props: any) => {
  const { id } = props.match.params;
  const weight = useFormInput("0");
  const addCatWeightMutation = useMutation(ADD_CAT_WEIGHT);

  const handleKeyup = (e: any) => {
    const re = /^\d{1,2}([.]|[.]\d)?$/;
    if (!re.test(weight.value) && weight.value.length != 0) {
      alert(
        "99이하의 숫자만 입력해주세요(소수점 첫째자리까지) \n 예) 12.3 또는 12 "
      );
      weight.setEmpty();
    }
  };

  async function handleSubmit() {
    console.log(weight.value);
    try {
      const res = await addCatWeightMutation({
        variables: { catId: id, weight: Number(weight.value) }
      });
      console.log(res);
      window.location.href = "/";
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <Text>현재 고양이 몸무게를 입력해주세요</Text>
      <Divider>
        <BigInput
          {...weight}
          onKeyUp={handleKeyup}
          onClick={() => weight.value == "0" && weight.setEmpty()}
        />
        <BigText>Kg</BigText>
      </Divider>
      <SubmitBtn>
        <Button title={"입력하기"} primary={true} onClick={handleSubmit} />
      </SubmitBtn>
    </Container>
  );
};

const SubmitBtn = styled.div`
  width: 100px;
  height: 30px;
`;

const BigText = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 20px;
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
