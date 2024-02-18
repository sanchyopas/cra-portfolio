import styled from "styled-components";
import sprite from "../../images/sprite.svg";

type IconPropsType = {
  width?: string;
  height?: string;
  viewBox?: string;
  iconId: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg width={props.width || "23"} height={props.height || "23"} viewBox={props.viewBox || "0 0 23 23"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  );
};
