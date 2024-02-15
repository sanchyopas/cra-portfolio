import React from "react";
import styled from "styled-components";
import sprite from "../images/sprite.svg";

type LogoPropsType = {
  width?: string;
  height?: string;
  iconId: string;
  viewBox?: string;
};

const Logo = (props: LogoPropsType) => {
  return (
    <LogoStyled>
      <svg width={props.width || "16"} height={props.height || "16"} viewBox={props.viewBox || "0 0 23 23"} fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${sprite}#${props.iconId}`} />
      </svg>
      <span>Sanchyopas</span>
    </LogoStyled>
  );
};

const LogoStyled = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 5px 5px 0px;
  cursor: pointer;

  span {
    margin-left: 8px;
  }
`;

export default Logo;
