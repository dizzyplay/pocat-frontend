import React from "react";
import Presenter from "./Presenter";
import { useQuery } from "react-apollo-hooks";
import Loading from "../Loading";
import { gql } from "apollo-boost";

type Props = {
  uuid: string;
};

const CAT_WEIGHT_INFO = gql`
  query catInfo($uuid: String!) {
    catInfo(uuid: $uuid) {
      uuid
      ribcage
      LIM
      neutering
      pregnant
      birth
      weights {
        id
        weight
      }
      feed {
        kcal
      }
    }
  }
`;

export default (props: Props) => {
  const { data, loading, error } = useQuery(CAT_WEIGHT_INFO, {
    variables: { uuid: props.uuid }
  });
  if (loading) return <Loading />;
  else if (!data.catInfo.weights[0]) {
    return <div>no info </div>;
  } else {
    const { catInfo } = data;
    return <Presenter catWeightInfo={catInfo} />;
  }
};
