import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { myTheme } from "../../style/ThemeStyle";

export const Media = () => {
  return (
    <StyledMedia>
      <Line />
      <Link>
        <Icon iconId="github" width="21" height="20" viewBox="0 0 21 20" />
      </Link>
      <Link>
        <Icon iconId="dribble" width="23" height="23" viewBox="0 0 23 23" />
      </Link>
      <Link>
        <Icon iconId="figma" width="14" height="20" viewBox="0 0 14 20" />
      </Link>
    </StyledMedia>
  );
};

const StyledMedia = styled.div`
  position: absolute;
  top: 0;
  left: -122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Link = styled.a`
  display: inline-flex;
  padding: 6px;
  transition: all 0.5s ease;

  @media (hover: hover) {
    &:hover {
      color: ${myTheme.color.primary};
    }
  }
`;

const Line = styled.div`
  width: 2px;
  height: 122px;
  background-color: ${myTheme.color.grey};
`;
