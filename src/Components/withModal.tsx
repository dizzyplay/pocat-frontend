import React from "react";

interface IProps {}

export function withModal(props: IProps) {
  return function(Component: React.FC) {
    return <Component />;
  };
}
