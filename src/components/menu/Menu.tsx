import React from "react";
import styled from "styled-components";
import { myTheme } from "../../style/ThemeStyle";
import { FlexWrapper } from "../FlexWrapper";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <FlexWrapper as="ul" align="center" wrap="wrap">
        {props.menuItems.map((item, index) => {
          return (
            <StyleMenuItem>
              <Link href="#" key={index}>
                <span>#</span>
                {item}
              </Link>
            </StyleMenuItem>
          );
        })}
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
