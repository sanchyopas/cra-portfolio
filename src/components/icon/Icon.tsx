import styled from "styled-components";
import sprite from "../../images/sprite.svg";

type IconPropsType = {
  width: string;
  height: string;
  viewBox: string;
  iconId: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg width={props.width} height={props.height} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  );
};
