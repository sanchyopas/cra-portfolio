import styled from "styled-components";
import { myTheme } from "../../../../style/ThemeStyle";

export const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
  margin-bottom: 32px;

  span {
    color: ${myTheme.color.primary};
  }
`;
