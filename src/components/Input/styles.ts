import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  background-color: ${(props) => props.theme.colors["base-input"]};
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  border-radius: 10px;

`;

export const Suffix =  styled.span`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 0.8rem;
  padding: 0 0.8rem 0 0.3rem;
  color: ${(props) => props.theme.colors["base-label"]};
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors["base-input"]};

  width: 100%;

  border: none;
  padding: 0.9rem;
  color: ${(props) => props.theme.colors["base-text"]};

  font-family: ${(props) => props.theme.fonts.text};
  font-size: 1.1rem;

`;