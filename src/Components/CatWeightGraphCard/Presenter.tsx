import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { dateToString } from "../../utils";

type Props = {
  catWeights: any[];
};

export default (props: Props) => {
  return (
    <Wrapper>
      <Divider>
        <TitleColumn>
          <Title>
            {props.catWeights[0] &&
              dateToString(
                props.catWeights[props.catWeights.length - 1].updatedAt
              )}
          </Title>
        </TitleColumn>
      </Divider>
      <Divider>
        <LineChart
          width={390}
          height={200}
          data={props.catWeights}
          margin={{ top: 30, right: 10, bottom: 0, left: 40 }}
        >
          <Line type={"monotone"} dataKey={"weight"} stroke={"#297fec"} />
          <CartesianGrid
            stroke="#ccc"
            strokeDasharray={"3 3"}
            vertical={false}
          />
          <Legend />
          <XAxis
            dataKey={"updatedAt"}
            tickLine={false}
            axisLine={true}
            tick={<CustomXAxisTick />}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </Divider>
    </Wrapper>
  );
};

const ToolTipBox = styled.div`
  ${(props: mytheme) => props.theme.shadowBox};
  width: 80px;
  display: block;
  font-size: 9px;
  padding: 10px;
  font-weight: 600;
  letter-spacing: -0.6px;
  line-height: 1.6;
  text-align: center;
`;

const CustomTooltip = (props: any) => {
  const { active } = props;

  if (active) {
    const { payload, label } = props;
    const date = dateToString(label, { full: true });
    return (
      <ToolTipBox>
        {date}
        <br />
        {payload[0].value} 키로
      </ToolTipBox>
    );
  } else return null;
};

const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const day = dateToString(payload.value, { day: true });
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={10}
        y={0}
        dy={10}
        textAnchor={"end"}
        fontWeight={600}
        fontSize={10}
        fill={"#5aa3ff"}
      >
        {day}
      </text>
    </g>
  );
};

const Wrapper = styled.div`
  ${(props: mytheme) => props.theme.shadowBox};
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  padding-bottom: 10px;
`;

const TitleColumn = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px 0 30px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.6px;
  color: ${(props: mytheme) => props.theme.grey700};
`;

const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
