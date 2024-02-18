import React from "react";
import styled from "styled-components";
import { myTheme } from "../../style/ThemeStyle";

type TextPropsType = {
  text: string;
  marginTop?: string;
};

export const Text = (props: TextPropsType) => {
  return <StyledText>{props.text}</StyledText>;
};

const StyledText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  color: ${myTheme.color.grey};
  text-wrap: balance;
`;
