import React, { useState } from "react";
import Presenter from "./Presenter";
import { useFormInput } from "../../Hooks/form";

export default () => {
  const [action, setAction] = useState("login");
  const email = useFormInput("");
  const password = useFormInput("");
  const onSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
  };
  return (
    <Presenter
      action={action}
      setAction={setAction}
      email={email}
      password={password}
      onSubmit={onSubmit}
    />
  );
};
