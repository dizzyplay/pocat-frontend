import React, { useState } from "react";
import { SmallCard } from "../SmallCard";
import styled from "styled-components";
import { bmiToString, getCatStatusValue, birthdateToString } from "../../utils";
import CatWeightGraphCard from "../CatWeightGraphCard";
import { Modal } from "../Modal";
import { Link } from "react-router-dom";
import AddWeight from "../AddWeight";
import { useInput } from "../AddCatSlider/StepOne";

type Props = {
  catWeightInfo: {
    weights: { weight: string }[];
    uuid: string;
    ribcage: number;
    LIM: number;
    pregnant: boolean;
    neutering: boolean;
    birth: string;
    feed: {
      kcal: number;
    };
  };
};

export default (props: Props) => {
  const { catWeightInfo } = props;
  const [addWeight, setAddWeight] = useState(false);
  const bmiText = (
    <HoverTextDiv>
      비만도와 체지방은 허리둘레와 뒷다리 길이로 결정됩니다
    </HoverTextDiv>
  );
  const feedEl = (
    <HoverTextDiv>
      표시되는 양은 하루 공급량입니다. 해당되는양만큼 나누어 공급하세요
    </HoverTextDiv>
  );
  let currentWeight,
    BMI,
    bmiString: { value: string; color: string } = { value: "", color: "" },
    feedReq;
  if (
    catWeightInfo.weights[0] &&
    catWeightInfo.ribcage &&
    catWeightInfo.LIM &&
    catWeightInfo.feed
  ) {
    currentWeight = catWeightInfo.weights[0].weight;
    BMI = Math.floor(1.5 * (catWeightInfo.ribcage - catWeightInfo.LIM) - 9);
    bmiString = bmiToString(BMI);
    const catStatus = getCatStatusValue(
      catWeightInfo.pregnant,
      birthdateToString(catWeightInfo.birth, false),
      catWeightInfo.neutering,
      BMI
    );
    const RER = 30 * Number(currentWeight) + 70;
    const DER = RER * catStatus;
    const daygram = catWeightInfo.feed.kcal / 1000;
    feedReq = String(Math.floor(DER / daygram));
  }
  return (
    <Wrapper>
      <SmallCard
        title={"비만도"}
        infoText={bmiString ? bmiString.value : undefined}
        infoTextColor={bmiString.color}
        isHover={true}
        hoverText={bmiText}
      />
      <SmallCard
        title={"체지방율"}
        infoText={BMI ? String(BMI + "%") : undefined}
        infoTextColor={bmiString.color}
        isHover={true}
        hoverText={bmiText}
      />
      <SmallCard
        title={"현재 몸무게"}
        infoText={currentWeight ? currentWeight + "Kg" : undefined}
        infoTextColor={bmiString.color}
        isHover={true}
        hoverText={"클릭해서 몸무게 추가하기"}
        onClick={() => {
          setAddWeight(true);
        }}
      />
      <SmallCard
        title={"하루 사료량"}
        infoText={feedReq ? feedReq + "g" : undefined}
        isHover={true}
        hoverText={feedEl}
      />
      <CatWeightGraphCard uuid={catWeightInfo.uuid} />
      <Modal isOpen={addWeight} handleModal={setAddWeight}>
        <AddWeight uuid={catWeightInfo.uuid} handleModal={setAddWeight} />
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-gap: 20px;
`;

const HoverTextDiv = styled.div`
  width: 80%;
  line-height: 20px;
`;
