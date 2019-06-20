import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface IProps {
  isOpen: boolean;
  handleModal?: any;
  children?: any;
}
export const Modal = (props: IProps) => {
  return (
    <div>
      {props.isOpen ? (
        <ModalPortal>
          <FixedContent onClick={() => props.handleModal(false)}>
            <div onClick={(e: any) => e.stopPropagation()}>
              {props.children}
            </div>
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

const FixedContent = styled.div`
  position: fixed;
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
