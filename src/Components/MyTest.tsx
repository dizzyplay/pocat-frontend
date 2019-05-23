import React, { useState } from "react";
import styled from "styled-components";
import { ModModal } from "./ModModal";

export const MyTest = () => {
  return (
    <>
      <ModModal />
    </>
  );
};

const WhiteBox = styled.div`
  width: 300px;
  height: 300px;
  background: white;
`;
