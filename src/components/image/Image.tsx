import styled from "styled-components";
import sprite from "../../images/sprite.svg";

type ImagesPropsType = {
  width?: string;
  height?: string;
  srcImg: string;
};

export const Image = (props: ImagesPropsType) => {
  return (
    <>
      <img src={props.srcImg} width={props.width || "auto"} height={props.height || "auto"} />
    </>
  );
};
