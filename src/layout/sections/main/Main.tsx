import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Image } from "../../../components/image/Image";
import imgMainMan from "../../../images/main-man.png";
import { myTheme } from "../../../style/ThemeStyle";
import { Button } from "../../../components/Button";
import { MainTitle } from "./mainTitle/MainTitle";
import { Text } from "../../../components/text/Text";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper gap="30px" align="center" justify="space-beetwen">
        <Column>
          <MainTitle>
            Elias is a <span>web designer</span> and <span>front-end developer</span>
          </MainTitle>
          <Text text="He crafts responsive websites where technologies meet creativity" />
          <Button marginTop="24px">Contact me !!</Button>
        </Column>
        <Column>
          <Image srcImg={imgMainMan} width="457px" height="386px" />
          <ImageCaption as="p" justify="center" align="center">
            Currently working on Portfolio
          </ImageCaption>
        </Column>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  ${FlexWrapper} {
    @media screen and (max-width: 920px) {
      flex-direction: column;
    }
  }
`;

const Column = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:nth-child(1) {
      flex: 1 1 50%;
    }
  }
`;

const StyledSubtitle = styled.p`
  color: ${myTheme.color.grey};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  margin-top: 32px;
`;

const ImageCaption = styled(FlexWrapper)`
  padding: 8px;
  border: 1px solid ${myTheme.color.grey};
  max-width: 386px;
  margin: 0 auto;

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    border: 1px solid ${myTheme.color.primary};
    background: ${myTheme.color.primary};
    margin-right: 10px;
  }
`;
