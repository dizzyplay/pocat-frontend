import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_CURRENT_CAT } from "../../Apollo/Queries";
import Loading from "../Loading";
import Presenter from "./Presenter";

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
