import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Modal = (props: any) => {
  return (
    <div onClick={props.handleModal}>
      {props.isOpen ? (
        <ModalPortal>
          <Fix>{props.children}</Fix>
        </ModalPortal>
      ) : null}
    </div>
  );
};

const ModalPortal = ({ children }: any) => {
  const el: any = document.getElementById("modal");
  return ReactDOM.createPortal(children, el);
};

const Fix = styled.div`
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
