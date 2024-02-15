import React from "react";
import styled from "styled-components";
import Logo from "../../components/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo iconId={"dribble"} width={"23"} height={"23"} viewBox="0 0 23 23"></Logo>
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  min-height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px 0px;
`;
