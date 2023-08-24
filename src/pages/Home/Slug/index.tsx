import { cloneElement } from "react";
import { Wrapper, WrapperIcon } from "./styles";

interface SlugProps {
  text: string;
  icon: JSX.Element;
  color: string;
}

export function Slug({ text, icon, color }: SlugProps){

  return (
    <Wrapper>
      <WrapperIcon color={color}>
        {cloneElement(icon, { size: '1rem', color:  "#fff" })}
      </WrapperIcon>
      <p>{text}</p>
    </Wrapper>
  )
}