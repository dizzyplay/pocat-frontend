import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_CURRENT_CAT, SET_CURRENT_CAT } from "../Apollo/Queries";
import styled from "styled-components";

export const MY_CAT_LIST = gql`
  {
    myCatList {
      uuid
      name
      image
    }
  }
`;

const SpanClick = styled.div`
  border: 1px solid;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export default () => {
  const { data } = useQuery(MY_CAT_LIST);
  const setCurrentCatMutation = useMutation(SET_CURRENT_CAT);
  const handleClick = async (uuid: string) => {
    await setCurrentCatMutation({ variables: { uuid } });
  };
  return (
    <>
      {!data.myCatList ? (
        <div>loading</div>
      ) : (
        data.myCatList.map((cat: any, idx: number) => (
          <SpanClick key={idx} onClick={() => handleClick(cat.uuid)}>
            <Avatar key={idx} url={cat.image} size={"sm"} />
            {cat.name}
          </SpanClick>
        ))
      )}
    </>
  );
};
