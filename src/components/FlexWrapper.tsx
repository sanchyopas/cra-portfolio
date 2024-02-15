import styled from "styled-components";

type FlexWraperPropsType = {
  align?: string;
  justify?: string;
  direction?: string;
  wrap?: string;
};

export const FlexWrapper = styled.div<FlexWraperPropsType>`
  display: flex;
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "flex-start"};
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;
