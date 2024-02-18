import styled from "styled-components";
import { myTheme } from "../style/ThemeStyle";

type ButtonPropsType = {
  borderColor?: string;
  fontColor?: string;
  marginTop?: string;
};

export const Button = styled.button<ButtonPropsType>`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 131%;
  margin-top: ${(props) => props.marginTop || "16px"};
  border: 1px solid ${(props) => props.borderColor || myTheme.color.primary};
  color: ${(props) => props.fontColor || myTheme.color.defaultFont};
`;
