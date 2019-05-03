import React from "react";
import styled from "styled-components";

type option = {
  name: string;
  value: string;
};

interface Props {
  options: option[];
  onChange: (args: React.ChangeEvent) => void;
}

const CustomSelect = (props: Props) => {
  return (
    <Select onChange={props.onChange}>
      {props.options.map((d, idx) => (
        <option key={idx} value={d.value}>
          {d.name}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;

const Select = styled.select`
  width: 100%;
  height: 40px;
  padding-left: 5px;
  margin-left: 7px;
  border: 1px solid ${(props: mytheme) => props.theme.grey400};
  border-radius: ${(props: mytheme) => props.theme.borderRadius};
  &:focus {
    outline: none;
  }
`;
