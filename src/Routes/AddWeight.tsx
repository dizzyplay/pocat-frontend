import React from "react";

export default (props: any) => {
  const { id } = props.match.params;
  console.log(id);
  return <div>{id}</div>;
};
