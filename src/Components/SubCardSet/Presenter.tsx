import React from "react";
import { SmallCard } from "../SmallCard";
import styled from "styled-components";
import { bmiToString, getCatStatusValue, birthdateToString } from "../../utils";
import CatWeightGraphCard from "../CatWeightGraphCard";

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
      />
      <SmallCard
        title={"체지방율"}
        infoText={BMI ? String(BMI + "%") : undefined}
        infoTextColor={bmiString.color}
      />
      <SmallCard
        title={"몸무게"}
        infoText={currentWeight ? currentWeight + "Kg" : undefined}
        infoTextColor={bmiString.color}
        onClick={() => alert("hi")}
        isHover={true}
      />
      <SmallCard
        title={"하루 사료량"}
        infoText={feedReq ? feedReq + "g" : undefined}
      />
      <CatWeightGraphCard uuid={catWeightInfo.uuid} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-gap: 20px;
`;
