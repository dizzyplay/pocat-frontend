import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_CURRENT_CAT } from "../Apollo/Queries";
import { gql } from "apollo-boost";
import { MY_CAT_LIST } from "./CatList";

const CAT_INFO = gql`
  query CatInfo($uuid: String!) {
    catInfo(uuid: $uuid) {
      uuid
      name
    }
  }
`;

const Cat = (props: any) => {
  const { data, loading, error } = useQuery(CAT_INFO, {
    variables: { uuid: props.catUuid }
  });
  if (loading && error) <div>loading</div>;
  const cat = data.catInfo;
  return <div>{cat && <div>{cat.name}</div>}</div>;
};

export default () => {
  const [catUuid, setCatUuid] = useState();
  const { data } = useQuery(GET_CURRENT_CAT);
  useEffect(() => {
    setCatUuid(data.current_cat_uuid);
  });
  return <div>{catUuid && <Cat catUuid={catUuid} />}</div>;
};
