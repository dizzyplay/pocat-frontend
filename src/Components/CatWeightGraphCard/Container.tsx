import React, { useEffect, useRef } from "react";
import Presenter from "./Presenter";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loading from "../Loading";
import { Simulate } from "react-dom/test-utils";

interface IProps {
  uuid: string;
}

const GET_CAT_WEIGHT_LIST = gql`
  query getCatWeightList($catId: String!, $limit: Int) {
    catWeightList(catId: $catId, limit: $limit) {
      id
      weight
      createdAt
      updatedAt
    }
  }
`;

export default (props: IProps) => {
  const { data, loading } = useQuery(GET_CAT_WEIGHT_LIST, {
    variables: { catId: props.uuid, limit: 10 }
  });
  if (data.catWeightList) {
    return <Presenter catWeights={data.catWeightList} />;
  } else if (loading) {
    return <Loading />;
  } else {
    return null;
  }
};
