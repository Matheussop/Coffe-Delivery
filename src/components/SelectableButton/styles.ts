import { styled } from "styled-components";

interface ButtonContainerProps {
  selected?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${(props) => props.selected ? props.theme.colors["purple-light"] : props.theme.colors["base-button"]};

  border: 1px solid;
  border-color: ${(props) => props.selected ? props.theme.colors["purple"]: 'transparent'};
  padding: 1rem;
  border-radius: 0.4rem;
  height: 3.2rem;
  color: ${(props) => props.theme.colors["base-text"]};

  font-family: ${(props) => props.theme.fonts.text};
  font-size: 0.8rem;
  line-height: 160%;
  gap: 0.8rem;

`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    color: ${({theme}) => theme.colors.purple};
  }
`;