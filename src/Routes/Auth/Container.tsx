import React, { useState } from "react";
import Presenter from "./Presenter";
import { useFormInput } from "../../Hooks/form";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-apollo-hooks";
import {
  CONFIRM_SECRET,
  LOCAL_LOGIN,
  LOGIN,
  SET_PASSWORD,
  SINGUP
} from "./Quaries";

export default () => {
  const [action, setAction] = useState("login");
  const [userId, setUserId] = useState("");
  const email = useFormInput("");
  const password = useFormInput("");
  const secretKey = useFormInput("");
  const setPassword = useFormInput("");

  const userLoginMutation = useMutation(LOGIN, {
    variables: {
      email: email.value,
      password: password.value
    }
  });
  const userSignUpMutation = useMutation(SINGUP, {
    variables: { email: email.value }
  });
  const localLoginMutation = useMutation(LOCAL_LOGIN);
  const confirmSecret = useMutation(CONFIRM_SECRET, {
    variables: { email: email.value, secret: secretKey.value }
  });
  const setUserPasswordMutation = useMutation(SET_PASSWORD, {
    variables: { userId: userId, password: setPassword.value }
  });

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    if (action === "login") {
      try {
        const { data } = await userLoginMutation();
        await localLoginMutation({
          variables: { token: data.userLogin.token }
        });
      } catch (e) {
        toast.error(e.message);
      }
    } else if (action === "signUp") {
      try {
        const { data } = await userSignUpMutation();
        if (data.createUser) {
          toast.success("해당 이메일로 인증키가 발송되었습니다.");
          setAction("secret");
        }
      } catch (e) {
        toast.error("해당 이메일은 사용할수 없습니다.");
      }
    } else if (action === "secret") {
      //secret auth
      try {
        const { data } = await confirmSecret();
        if (data.confirmSecret) {
          toast.success("인증이 성공적으로 완료되었습니다.");
          console.log(data);
          setUserId(data.confirmSecret.uuid);
          setAction("setPassword");
        }
      } catch (e) {
        toast.error(e.message);
      }
    } else if (action === "setPassword") {
      //set password
      const { data } = await setUserPasswordMutation();
      if (data.setUserPassword) {
        toast.success(
          "성공적으로 비밀번호가 설정되었습니다. 로그인 창으로 이동합니다."
        );
        setAction("login");
      } else {
        toast.error(
          "비밀번호 설정에 문제가 있습니다. 정확한 가입경로로 가입해주세요."
        );
      }
    }
  };
  return (
    <Presenter
      action={action}
      setAction={setAction}
      email={email}
      secretKey={secretKey}
      setPassword={setPassword}
      password={password}
      onSubmit={onSubmit}
    />
  );
};
