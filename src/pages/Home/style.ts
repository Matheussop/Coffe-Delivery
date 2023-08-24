import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 64%;
  margin: 0rem 12rem;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 5.875rem;
  gap: 3rem;
`;

export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

`;

export const Title = styled.h1`
  font-family: '${({ theme }) => theme.fonts.title}';
  font-weight: 800;
  font-size: 3rem;

  line-height: 130%;
`;

export const Subtitle = styled.h2`
  font-family: '${({ theme }) => theme.fonts.text}';
  font-size: 1.245rem;
  font-weight: 400;

  margin-bottom: 4.1rem;
`;

export const SlugsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
`;

export const IntroImage = styled.div`
  width: 80%;
`;
