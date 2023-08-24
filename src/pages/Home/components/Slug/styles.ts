import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;

  gap: 0.8rem;
  align-items: center;

  p {
    font-family: '${({ theme }) => theme.fonts.text}';
    font-size: 1rem;
  }
`;

interface IconDivProps {
  color: 'yellow-dark' | 'base-text' | 'yellow' | 'purple';
}

export const WrapperIcon = styled.div<IconDivProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 25px;
  width: 2rem;
  height: 2rem;
  background-color: ${({theme, color}) => theme.colors[`${color}`]};
`;