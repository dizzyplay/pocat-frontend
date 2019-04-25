import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_CURRENT_CAT } from "../../Apollo/Queries";
import { gql } from "apollo-boost";
import Loading from "../Loading";
import MainCatCard from "../MainCatCard";
import Presenter from "./Presenter";

const CAT_INFO = gql`
  query CatInfo($uuid: String!) {
    catInfo(uuid: $uuid) {
      uuid
      name
    }
  }
`;
type Props = {
  initCat: any;
};

export default ({ initCat }: Props) => {
  const { data, loading } = useQuery(GET_CURRENT_CAT);
  if (loading) return <Loading />;
  else if (data.current_cat_uuid) {
    return <Presenter uuid={data.current_cat_uuid} />;
  } else if (initCat) {
    return <Presenter uuid={initCat.uuid} />;
  } else {
    return null;
  }
};
