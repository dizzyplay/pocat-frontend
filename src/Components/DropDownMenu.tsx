import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { mytheme } from "../Styles/Theme";
import { useMutation } from "react-apollo-hooks";
import { LOCAL_USER_LOGOUT } from "../Apollo/Queries";

type Props = {
  itemList: any;
  selectedCat: string;
  handleSelect: (uuid: string) => void;
};

export const DropDownMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const logoutMutation = useMutation(LOCAL_USER_LOGOUT);
  const { itemList, handleSelect } = props;
  const [currentCat, setCurrentCat] = useState(itemList[0]);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleLogout = () => {
    logoutMutation();
  };

  const selectCat = (uuid: string, cat: any) => {
    handleSelect(uuid);
    setCurrentCat(cat);
    setIsOpen(false);
  };
  if (isOpen) {
    return (
      <Wrapper>
        <DropDownContent>
          {itemList.map((item: any, idx: number) => (
            <Button key={idx} onClick={() => selectCat(item.uuid, item)}>
              <Avatar size={"sm"} url={item.image} />
              <Name>{item.name}</Name>
            </Button>
          ))}
          <HorizenLine />
          <CenteredButton onClick={handleLogout}>
            <CenteredName>로그아웃</CenteredName>
          </CenteredButton>
        </DropDownContent>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Button onClick={handleOpen}>
          <Avatar size={"sm"} url={currentCat.image} />
          <Name>▼</Name>
        </Button>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 150px;
  position: fixed;
  display: block;
  padding: 0;
`;

const DropDownContent = styled.div`
  background: white;
  width: 100%;
  display: flex;
  position: absolute;
  top: -27px;
  left: -1px;
  flex-direction: column;
  border: 1px solid ${(props: mytheme) => props.theme.grey200};
  z-index: 1;
  user-select: none;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  user-select: none;
`;

const Name = styled.span`
  color: ${(props: mytheme) => props.theme.grey600};
  font-family: "Apple SD Gothic Neo", sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  height: 15px;
  line-height: 15px;
  width: 80px;
  letter-spacing: -0.3px;
  text-align: left;
`;

const HorizenLine = styled.hr`
  border-top: 1px solid ${(props: mytheme) => props.theme.grey200};
  width: 70%;
`;

const CenteredButton = styled(Button)`
  justify-content: center;
`;

const CenteredName = styled(Name)`
  text-align: center;
`;
