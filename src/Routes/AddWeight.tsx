import React from "react";

export default (props: any) => {
  const { id } = props.match.params;
  return <div>{id}</div>;
};
