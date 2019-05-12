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
  setIndex,
  setAddedCat
}: {
  catKindsList: CatKindsListType[];
  addCatMutation: (args: any) => any;
  setIndex: (args: number) => void;
  setAddedCat: any;
}) => {
  const catKindsArray: SelectType[] = [];
  catKindsList.forEach(c => catKindsArray.push({ name: c.title, value: c.id }));
  const name = useInput("");
  const gender = useInput("female");
  const catKinds = useInput(1);
  const year = useInput("2000");
  const month = useInput("1");
  const day = useInput("1");
  const neutering = useInput("false");
  const pregnant = useInput("false");
  const addCatSubmit = async () => {
    const birthday = `${year.value}-${month.value}-${day.value}`;
    if (name.value.trim() === "") {
      toast.error("고양이 이름을 입력해주세요");
      return;
    }
    if (name.value.trim().length > 30) {
      toast.error("고양이 이름이 너무 깁니다. 30자 미만으로 입력해주세요.");
      return;
    } else {
      try {
        const { data } = await addCatMutation({
          variables: {
            name: name.value.trim(),
            gender: gender.value,
            kindsId: Number(catKinds.value),
            birth: birthday,
            neutering: neutering.value === "true",
            pregnant: pregnant.value === "true"
          }
        });
        setAddedCat({ uuid: data.addCat.uuid, name: data.addCat.name });
        if (data.addCat.uuid) {
          toast.success(
            "고양이가 등록되었습니다! 고양이 체형 정보를 입력해주세요"
          );
          setTimeout(() => {
            setIndex(2);
          }, 500);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <Container>
      <InputContainer>
        <InputLabel>이름</InputLabel>
        <div style={{ width: "350px" }}>
          <Input label={""} required={true} type={"text"} {...name} />
        </div>
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
          <CustomSelect options={dayOptions} onChange={day.onChange} /> 일
        </DateContainer>
      </InputContainer>
      <InputContainer>
        <InputLabel>중성화 여부</InputLabel>
        <CustomSelect
          options={[
            { name: "아니오", value: "false" },
            { name: "네", value: "true" }
          ]}
          onChange={neutering.onChange}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>임신 여부</InputLabel>
        <CustomSelect
          options={[
            { name: "아니오", value: "false" },
            { name: "네", value: "true" }
          ]}
          onChange={pregnant.onChange}
        />
      </InputContainer>
      <Button title={"등록하기"} primary={true} onClick={addCatSubmit} />
    </Container>
  );
};

export default StepOne;

export const useInput = (v: any) => {
  const [value, setValue] = useState(v);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return { value, onChange: handleChange };
};

const Container = styled.div`
  width: 380px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
  align-items: center;
`;

export const InputLabel = styled.div`
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
