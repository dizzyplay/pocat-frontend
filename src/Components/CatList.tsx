import React, { useEffect } from "react";
import Avatar from "./Avatar";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
import { SET_CURRENT_CAT } from "../Apollo/Queries";
const MY_CAT_LIST = gql`
  {
    myCatList {
      uuid
      name
      image
    }
  }
`;

export default () => {
  const { data } = useQuery(MY_CAT_LIST);
  const setCurrentCatMutation = useMutation(SET_CURRENT_CAT);
  const catList = data.myCatList;
  if (catList) {
    (async () => {
      await setCurrentCatMutation({
        variables: { uuid: data.myCatList[0].uuid }
      });
    })();
  }
  return (
    <>
      {!data.myCatList ? (
        <div>loading</div>
      ) : (
        data.myCatList.map((cat: any, idx: number) => (
          <Avatar key={idx} url={cat.image} size={"sm"} />
        ))
      )}
    </>
  );
};
