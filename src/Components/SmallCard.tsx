import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  infoText: string;
  infoTextColor?: string;
  onClick?: () => void;
  isHover?: boolean;
};

export const SmallCard = (props: Props) => {
  const { title, infoText, infoTextColor, onClick, isHover } = props;
  return (
    <Container onClick={onClick} isHover={isHover}>
      <TitlePosition>
        <Title>{title}</Title>
      </TitlePosition>
      <BottomPosition>
        <ColoredTitle color={infoTextColor}>{infoText}</ColoredTitle>
      </BottomPosition>
      {isHover ? <Overlay>몸무게 입력하기</Overlay> : null}
    </Container>
  );
};

SmallCard.defaultProps = {
  title: "none",
  infoText: "No value"
};

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  border-radius: 5px;
  color: white;
  transition: opacity 0.2s linear;
`;

const Container = styled.div`
  ${(props: mytheme) => props.theme.shadowBox};
  width: 200px;
  height: 200px;
  position: relative;
  cursor: ${(props: mytheme) => (props.isHover ? "pointer" : null)};
  &:hover {
    ${Overlay} {
      opacity: 0.99;
    }
  }
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
