import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_CURRENT_CAT, SET_CURRENT_CAT } from "../Apollo/Queries";
import styled from "styled-components";
import { DropDownMenu } from "./DropDownMenu";

const SpanClick = styled.div`
  border: 1px solid;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

type Props = {
  catList: any;
};
export default (props: Props) => {
  const { catList } = props;
  const [selectedCat, setSelectedCat] = useState(catList[0].uuid);
  const setCurrentCatMutation = useMutation(SET_CURRENT_CAT);
  const handleClick = async (uuid: string) => {
    const { data } = await setCurrentCatMutation({ variables: { uuid } });
  };

  return (
    <DropDownMenu
      itemList={catList}
      selectedCat={selectedCat}
      handleSelect={handleClick}
    />
  );
};
