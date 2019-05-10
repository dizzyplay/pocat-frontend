import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import { InputContainer, InputLabel, useInput } from "./StepOne";
import CustomSelect from "../CustomSelect";
import { Input } from "../Input";
import { useFormInput } from "../../Hooks/form";

const GET_CAT_LIST = gql`
  query myCatList {
    myCatList {
      uuid
      name
    }
  }
`;

type CatFeeds = {
  id: number;
  title: string;
};

interface IProps {
  catFeedsList: CatFeeds[];
}
const StepTwo = (props: IProps) => {
  const { data, loading } = useQuery(GET_CAT_LIST);
  const lim = useInput("10");
  const ribcage = useInput("20");
  const catFeeds = useInput(props.catFeedsList[0].id);
  const weight = useFormInput("");

  const handleKeyup = (e: any) => {
    const re = /^\d{1,2}([.]|[.]\d)?$/;
    console.log(e.key);
    if (!re.test(weight.value)) {
      alert(
        "99이하의 숫자만 입력해주세요(소수점 첫째자리까지) \n 예) 12.3 또는 12 "
      );
      weight.setEmpty();
    }
    console.log(weight.value);
  };

  if (!loading) {
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
    const { uuid, name } = data.myCatList[0];
    return (
      <Container>
        {name} 이의 몸무게 관리를 위해 몇가지를 입력해주세요.
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
      </Container>
    );
  }
  return <div>step two</div>;
};

export default StepTwo;

const Container = styled.div`
  width: 380px;
  border: solid 1px;
`;
