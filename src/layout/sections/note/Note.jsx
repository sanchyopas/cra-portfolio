import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { myTheme } from "../../../style/ThemeStyle";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Note = () => {
  return(
    <StyledNote direction="column" align="flex-end">
      <StyledText>
        <IconWrapper>
          <Icon iconId="quote" width="25" height="20" viewBox="0 0 25 20"/>
        </IconWrapper>
          With great power comes great electricity bill
        <IconWrapper>
          <Icon iconId="quote" width="25" height="20" viewBox="0 0 25 20"/>
        </IconWrapper>
      </StyledText>
      <Author>- Dr. Who</Author>
    </StyledNote>
  )
}

const StyledNote = styled(FlexWrapper)`
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
  max-width: 712px;
  margin: 112px auto 74px;
`;

const StyledText = styled.div`
  padding: 31px;
  position: relative;
  border: 1px solid ${myTheme.color.grey};
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 29px;
  background-color: ${myTheme.color.bodyColor};
  position: absolute;

  &:nth-child(1){
    top: 0;
    left: 11px;
    transform: translateY(-50%);
  }

  &:nth-child(2){
    bottom: 0;
    right: 17px;
    transform: translateY(50%);
  }
`;

const Author = styled.div`
  /* align-self: flex-end; */
  padding: 16px;
  border: 1px solid ${myTheme.color.grey};
  border-top: 0;
`;