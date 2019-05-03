import React, { useState } from "react";
import { Input } from "../Input";
import styled from "styled-components";
import CustomSelect from "../CustomSelect";
import { makeDateArrayForSelect } from "../../utils";
import { Button } from "../Button";
import { toast } from "react-toastify";

type SelectType = {
  name: string;
  value: string;
};

type CatKindsListType = {
  id: string;
  title: string;
};

const dayOptions = makeDateArrayForSelect(1, 31);
const monthOptions = makeDateArrayForSelect(1, 12);
const yearOptions = makeDateArrayForSelect(
  2000,
  new Date().getFullYear() - 1999
);

const StepOne = ({
  catKindsList,
  addCatMutation,
  setIndex
}: {
  catKindsList: CatKindsListType[];
  addCatMutation: (args: any) => any;
  setIndex: (args: number) => void;
}) => {
  const catKindsArray: SelectType[] = [];
  catKindsList.forEach(c => catKindsArray.push({ name: c.title, value: c.id }));
  const name = useInput("");
  const gender = useInput("female");
  const catKinds = useInput(1);
  const year = useInput("2000");
  const month = useInput("1");
  const day = useInput("1");
  console.log(year.value, month, day);
  const addCatSubmit = async () => {
    const birthday = `${year.value}-${month.value}-${day.value}`;
    try {
      const { data } = await addCatMutation({
        variables: {
          name: name.value,
          gender: gender.value,
          kindsId: Number(catKinds.value),
          birth: birthday
        }
      });
      if (data.addCat.uuid) {
        toast.success("고양이가 등록되었습니다!");
        setTimeout(() => {
          setIndex(2);
        }, 1000);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <InputContainer>
        <InputLabel>이름</InputLabel>
        <Input label={""} required={true} type={"text"} {...name} />
      </InputContainer>
      <InputContainer>
        <InputLabel>성별</InputLabel>
        <CustomSelect
          onChange={gender.onChange}
          options={[
            { name: "암컷", value: "female" },
            { name: "수컷", value: "male" }
          ]}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>고양이 품종</InputLabel>
        <CustomSelect options={catKindsArray} onChange={catKinds.onChange} />
      </InputContainer>
      <InputContainer>
        <InputLabel>생년월일</InputLabel>
        <DateContainer>
          <CustomSelect options={yearOptions} onChange={year.onChange} />
          년
          <CustomSelect options={monthOptions} onChange={month.onChange} /> 월
          <CustomSelect options={dayOptions} onChange={day.onChange} />일
        </DateContainer>
      </InputContainer>
      <Button title={"등록하기"} primary={true} onClick={addCatSubmit} />
    </Container>
  );
};

export default StepOne;

const useInput = (v: any) => {
  const [value, setValue] = useState(v);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return { value, onChange: handleChange };
};

const Container = styled.div`
  width: 380px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
  align-items: center;
`;

const InputLabel = styled.div`
  color: ${(props: mytheme) => props.theme.grey600};
  width: 130px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.5px;
  text-align: left;
  padding: 14px;
`;

const DateContainer = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
