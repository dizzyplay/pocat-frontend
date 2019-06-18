import React, { useState } from "react";
import { Modal } from "./Modal";
import styled from "styled-components";

export const ModModal = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Modal handleModal={handleModal} isOpen={open}>
        <WhiteBox onClick={(e: any) => e.stopPropagation()}>
          정보수정 모달 창
        </WhiteBox>
        <SmallText onClick={handleModal}>닫기</SmallText>
      </Modal>
      <div style={{ textAlign: "right" }}>
        <ExtraSmallText onClick={handleModal}>정보수정</ExtraSmallText>
      </div>
    </>
  );
};

const WhiteBox = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 5px;
  background: white;
  padding: 20px;
`;

const SmallText = styled.span`
  font-size: 12px;
  line-height: 15px;
  color: ${(props: mytheme) => props.theme.grey300};
  cursor: pointer;
`;

const ExtraSmallText = styled(SmallText)`
  font-size: 10px;
  letter-spacing: -0.3px;
  color: ${(props: mytheme) => props.theme.blue};
  text-decoration: underline;
  cursor: pointer;
`;
