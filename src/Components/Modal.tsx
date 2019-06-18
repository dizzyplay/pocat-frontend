import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Modal = (props: any) => {
  return (
    <div onClick={props.handleModal}>
      {props.isOpen ? (
        <ModalPortal>
          <FixedContent>
            <WhiteBox onClick={(e: any) => e.stopPropagation()}>
              {props.children}
            </WhiteBox>
          </FixedContent>
        </ModalPortal>
      ) : null}
    </div>
  );
};

const ModalPortal = ({ children }: any) => {
  const el: any = document.getElementById("modal");
  return ReactDOM.createPortal(children, el);
};

const WhiteBox = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 5px;
  background: white;
  padding: 20px;
`;

const FixedContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 2;
`;
