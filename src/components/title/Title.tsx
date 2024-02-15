import styled from "styled-components";
import { myTheme } from "../../style/ThemeStyle";

type TitlePropsType = {
  fontSize?: string;
  fontWeight?: string;
};

export const Title = styled.h1<TitlePropsType>`
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  line-height: 120%;

  span {
    color: ${myTheme.color.primary};
  }
`;
