import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 64%;
  margin: 2rem 12rem 0rem 12rem;
  width: 80%;
  
  nav {
    display: flex;
    gap: 0.5rem;

    a, div {
      height: 3rem;

      display: flex;
      justify-content: center; 
      align-items: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

    }

    a {
      color: ${(props) => props.theme.colors['yellow-dark']};

      background-color: ${(props) => props.theme.colors['yellow-light']};
      border-radius: 6px;

      padding: 0.5rem;
      width: 3rem;

    }

    div {
      color: ${(props) => props.theme.colors['purple-dark']};
      background-color: ${(props) => props.theme.colors['purple-light']};
      border-radius: 6px;

      display: flex;
      padding: 0.5rem;
    }

    div p {
      font-size: 14px;
    }

    div svg{
      color: ${(props) => props.theme.colors['purple']};

      margin-right: 0.125rem;
    }
  }
`
