import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { CAT_INFO } from "../Queries/Cat";
import Loading from "./Loading";
import Avatar from "./Avatar";
import { birthdateToString } from "../utils";
import { ModModal } from "./ModModal";

type Props = {
  uuid: string;
};

export default (props: Props) => {
  const { data, loading } = useQuery(CAT_INFO, {
    variables: { uuid: props.uuid }
  });
  if (loading) return <Loading />;
  else {
    const { catInfo } = data;
    return (
      <Container>
        <HorizonDivider>
          <CenterColumn>
            <Avatar size={"lg"} url={catInfo.image} />
          </CenterColumn>
          <DetailInfo>
            <BigText>{catInfo.name}</BigText>
            <KindsText>{catInfo.kinds.title}</KindsText>
            <SmallText>
              {birthdateToString(catInfo.birth, false)}
              <br />
              {birthdateToString(catInfo.birth, true)}
            </SmallText>
          </DetailInfo>
          <CenterColumn>
            <VerticalDivider>
              <ModModal />
              <SmallText>
                <br />
                중성화: {catInfo.neutering ? "네" : "아니오"}
                <br />
                임신중: {catInfo.pregnant ? "네" : "아니오"}
              </SmallText>
            </VerticalDivider>
          </CenterColumn>
        </HorizonDivider>
      </Container>
    );
  }
};
const CenterColumn = styled.div`
  display: flex;
  width: 130px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 382px;
  height: 110px;
  padding: 25px 19px 25px 19px;
  margin-bottom: 15px;
`;

const HorizonDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
`;

const VerticalDivider = styled.div`
  display: flex;
  height: 100%;
  width: 100px;
  padding: 10px 0 40px 0;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailInfo = styled.div`
  display: flex;
  height: 100%;
  width: 140px;
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

const ExtraSmallText = styled(SmallText)`
  font-size: 10px;
  letter-spacing: -0.3px;
  color: ${(props: mytheme) => props.theme.blue};
  text-decoration: underline;
  cursor: pointer;
`;

const KindsText = styled.span`
  color: ${(props: mytheme) => props.theme.grey500};
  font-weight: 600;
  font-size: 13px;
  line-height: 1.38;
  padding-bottom: 3px;
`;
