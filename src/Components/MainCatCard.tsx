import React from "react";
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";
import { useQuery } from "react-apollo-hooks";
import { CAT_INFO } from "../Queries/Cat";
import Loading from "./Loading";
import Avatar from "./Avatar";
import { DateToString } from "../utils";

type Props = {
  uuid: string;
};

export default (props: Props) => {
  const { data, loading } = useQuery(CAT_INFO, {
    variables: { uuid: props.uuid }
  });
  if (loading) return <Loading />;
  else {
    console.log("main  cat card");
    console.log(data);
    const { catInfo } = data;
    return (
      <Container>
        <HorizonDivider>
          <Avatar size={"lg"} url={catInfo.image} />
          <DetailInfo>
            <BigText>{catInfo.name}</BigText>
            <KindsText>{catInfo.kinds.title}</KindsText>
            <SmallText>
              {DateToString(catInfo.birth, false)}
              <br />
              {DateToString(catInfo.birth, true)}
            </SmallText>
          </DetailInfo>
        </HorizonDivider>
      </Container>
    );
  }
};

const Container = styled.div`
  ${(props: mytheme) => props.theme.shadowBox};
  width: 382px;
  height: 100px;
  padding: 25px 19px 25px 19px;
  margin-bottom: 15px;
  align-items: center;
`;

const HorizonDivider = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 100%;
  flex-direction: row;
`;

const DetailInfo = styled.div`
  display: flex;
  padding: 0;
  margin-left: 20px;
  flex-direction: column;
`;

const BigText = styled.span`
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${(props: mytheme) => props.theme.grey700};
`;

const SmallText = styled.span`
  font-size: 12px;
  line-height: 15px;
  color: ${(props: mytheme) => props.theme.grey500};
`;

const KindsText = styled.span`
  color: ${(props: mytheme) => props.theme.grey500};
  font-weight: 600;
  font-size: 13px;
  line-height: 1.38;
  padding-bottom: 3px;
`;
