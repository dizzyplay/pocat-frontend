import React from "react";
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";

type Props = {
  title: string;
  infoText: string;
  infoTextColor?: string;
};

export const SmallCard = (props: Props) => {
  const { title, infoText, infoTextColor } = props;
  return (
    <Container>
      <TitlePosition>
        <Title>{title}</Title>
      </TitlePosition>
      <BottomPosition>
        <ColoredTitle color={infoTextColor}>{infoText}</ColoredTitle>
      </BottomPosition>
    </Container>
  );
};

SmallCard.defaultProps = {
  title: "none",
  infoText: "No value"
};

const Container = styled.div`
  ${(props: mytheme) => props.theme.shadowBox};
  width: 200px;
  height: 200px;
  position: relative;
`;

const TitlePosition = styled.div`
  position: absolute;
  top: 35px;
  left: 18px;
`;

const Title = styled.span`
  font-size: 23px;
  font-weight: 600;
  color: ${(props: mytheme) => props.theme.grey700};
`;

const BottomPosition = styled.div`
  position: absolute;
  bottom: 15px;
  right: 22px;
`;

const ColoredTitle = styled.span`
  color: ${(props: any) => (props.color ? props.color : props.theme.blue)};
  font-size: 40px;
`;
