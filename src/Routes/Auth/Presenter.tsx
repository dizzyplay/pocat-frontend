import React from "react";
import { Button } from "../../Components/Button";
import styled from "styled-components";
import { mytheme } from "../../Styles/Theme";
import { Input } from "../../Components/Input";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  text-align: center;
  width: 340px;
`;

const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #5aa3ff;
  margin-top: 0px;
  margin-bottom: 30px;
`;

const Logo = styled.h1`
  font-family: Avenir;
  font-size: 70px;
  font-weight: 600;
  letter-spacing: 10px;
  color: ${(props: mytheme) => props.theme.blue};
  margin-top: 0px;
  margin-bottom: 30px;
`;

const SmallLogo = styled.div`
  font-family: Avenir;
  font-size: 45px;
  font-weight: 600;
  letter-spacing: 5.9px;
  text-align: center;
  color: #5aa3ff;
  margin-bottom: 30px;
`;

const Link = styled.span`
  color: ${(props: mytheme) => props.theme.blueColor};
  cursor: pointer;
`;

const SubText = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: ${(props: mytheme) => props.theme.blue};
  margin-bottom: 44px;
  text-align: center;
`;
const Box = styled.div`
  width: ${(props: mytheme) => props.theme.authBox};
  max-width: ${(props: mytheme) => props.theme.authBox};
`;
const Form = styled(Box)`
  form {
    input {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    button {
      margin-bottom: 10px;
    }
  }
`;
interface AuthType {
  [key: string]: any;
}

const Auth = ({
  email,
  secretKey,
  setPassword,
  password,
  action,
  setAction,
  onSubmit
}: AuthType) => (
  <Wrapper>
    {action === "login" && (
      <>
        <Container>
          <SubTitle>건강한 야옹이를 위한 첫걸음</SubTitle>
          <Logo> POCAT </Logo>
          <SubText>
            포캣은 건강한 반려묘를 위한
            <br />
            건강기록 서비스입니다
          </SubText>
        </Container>
        <Form>
          <form onSubmit={onSubmit}>
            <Input label={"Email"} required={true} {...email} type={"email"} />
            <Input
              label={"Password"}
              required={true}
              {...password}
              type={"password"}
            />
            <Button title={"로그인"} primary={true} height={"50px"} />
          </form>
          <Link onClick={() => setAction("signUp")}>
            <Button title={"회원가입"} primary={false} height={"50px"} />
          </Link>
        </Form>
      </>
    )}
    {action === "signUp" && (
      <>
        <Container>
          <SmallLogo>POCAT</SmallLogo>
        </Container>
        <Form>
          <form onSubmit={onSubmit}>
            <Input label={"Email"} required={true} {...email} type={"email"} />
            <Button title={"이메일로 가입"} primary={true} height={"50px"} />
          </form>
          <Link onClick={() => setAction("login")}>
            <Button title={"로그인"} primary={false} height={"50px"} />
          </Link>
        </Form>
      </>
    )}
    {action === "secret" && (
      <>
        <Form>
          <form onSubmit={onSubmit}>
            <Input
              label={"이메일로 발송된 인증키를 입력해주세요"}
              required={true}
              {...secretKey}
              type={"text"}
            />
            <Button title={"인증하기"} primary={true} />
          </form>
        </Form>
      </>
    )}
    {action === "setPassword" && (
      <>
        <Form>
          <form onSubmit={onSubmit}>
            <Input
              label={"사용하실 패스워드를 입력해주세요"}
              required={true}
              {...setPassword}
              type={"password"}
            />
            <Button title={"비밀번호 설정"} primary={true} />
          </form>
        </Form>
      </>
    )}
  </Wrapper>
);

export default Auth;
