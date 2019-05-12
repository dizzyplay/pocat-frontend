import React from "react";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import { InputContainer, InputLabel, useInput } from "./StepOne";
import CustomSelect from "../CustomSelect";
import { Input } from "../Input";
import { useFormInput } from "../../Hooks/form";
import { Button } from "../Button";
import { Title } from "./NoCat";

type CatFeeds = {
  id: number;
  title: string;
};

interface IProps {
  catFeedsList: CatFeeds[];
  catUuid?: String;
  catName?: String;
}

const ADD_CAT_BODY_INFO = gql`
  mutation addBodyInfo(
    $uuid: String!
    $lim: String!
    $ribcage: String!
    $catFeedsId: String!
    $weight: Float!
  ) {
    addBodyInfo(
      uuid: $uuid
      lim: $lim
      ribcage: $ribcage
      catFeedsId: $catFeedsId
      weight: $weight
    )
  }
`;

const StepTwo = (props: IProps) => {
  const lim = useInput("10");
  const ribcage = useInput("20");
  const catFeeds = useInput(props.catFeedsList[0].id);
  const weight = useFormInput("");

  const addCatBodyInfoMutation = useMutation(ADD_CAT_BODY_INFO);

  const handleKeyup = (e: any) => {
    const re = /^\d{1,2}([.]|[.]\d)?$/;
    if (!re.test(weight.value)) {
      alert(
        "99이하의 숫자만 입력해주세요(소수점 첫째자리까지) \n 예) 12.3 또는 12 "
      );
      weight.setEmpty();
    }
  };

  const addLastSubmit = async (e: any) => {
    if (weight.value.trim() === "") {
      alert("몸무게를 입력해주세요!");
      return;
    }
    try {
      const { data } = await addCatBodyInfoMutation({
        variables: {
          uuid: props.catUuid,
          lim: lim.value,
          ribcage: ribcage.value,
          catFeedsId: String(catFeeds.value),
          weight: Number(weight.value)
        }
      });
      if (data) {
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const limList = Array.from({ length: 16 }, (a, idx) => ({
    name: idx + 10 + " cm",
    value: String(idx + 10)
  }));
  const ribcageList = Array.from({ length: 21 }, (a, idx) => ({
    name: (idx + 10) * 2 + " cm",
    value: String((idx + 10) * 2)
  }));
  const catFeedsListArray: any[] = [];
  props.catFeedsList.forEach(v => {
    catFeedsListArray.push({ name: v.title, value: v.id });
  });
  return (
    <Container>
      <Title size={"16px"} weight={"bold"}>
        {props.catName}이의 몸무게 관리를 위해 필요한 정보 몇가지를
        입력해주세요.
      </Title>
      <InputContainer>
        <InputLabel>다리길이</InputLabel>
        <CustomSelect options={limList} onChange={lim.onChange} />
      </InputContainer>
      <InputContainer>
        <InputLabel>몸통둘레</InputLabel>
        <CustomSelect options={ribcageList} onChange={ribcage.onChange} />
      </InputContainer>
      <InputContainer>
        <InputLabel>몸무게(kg)</InputLabel>
        <Input
          label={"ex) 5.5"}
          required={true}
          type={"text"}
          {...weight}
          handleKeyup={handleKeyup}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>사료종류</InputLabel>
        <CustomSelect
          options={catFeedsListArray}
          onChange={catFeeds.onChange}
        />
      </InputContainer>
      {/*  다리길이 몸통둘레 몸무게 사종류*/}
      <Button title={"등록하기"} primary={true} onClick={addLastSubmit} />
    </Container>
  );
};

export default StepTwo;

const Container = styled.div`
  width: 380px;
`;
