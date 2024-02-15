import React from "react";
import styled from "styled-components";
import { Title } from "../../components/title/Title";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper>
        <Column>
          <Title fontWeight="600">
            Elias is a <span>web designer</span> and <span>front-end developer</span>
          </Title>
        </Column>
        <Column>
          <Title fontWeight="600">
            Elias is a <span>web designer</span> and <span>front-end developer</span>
          </Title>
        </Column>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section``;

const Column = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1 1 50%;
  }
`;
