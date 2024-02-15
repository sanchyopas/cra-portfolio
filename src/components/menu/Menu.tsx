import React from "react";
import styled from "styled-components";
import { myTheme } from "../../style/ThemeStyle";
import { FlexWrapper } from "../FlexWrapper";

export const Menu = () => {
  return (
    <StyledMenu>
      <FlexWrapper as="ul">
        <StyleMenuItem>
          <Link href="#">
            <span>#</span>home
          </Link>
        </StyleMenuItem>
        <StyleMenuItem>
          <Link href="#">
            <span>#</span>works
          </Link>
        </StyleMenuItem>
        <StyleMenuItem>
          <Link href="#">
            <span>#</span>about-me
          </Link>
        </StyleMenuItem>
        <StyleMenuItem>
          <Link href="#">
            <span>#</span>contacts
          </Link>
        </StyleMenuItem>
        <StyleMenuItem>
          <Link href="#">EN</Link>
        </StyleMenuItem>
      </FlexWrapper>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  align-self: flex-end;
`;

const StyleMenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

const Link = styled.a`
  display: inline-flex;
  padding: 8px 0px;
  transition: 0.5s ease;

  span {
    color: ${myTheme.color.primary};
  }

  @media (hover: hover) {
    &:hover {
      color: ${myTheme.color.grey};
    }
  }
`;
