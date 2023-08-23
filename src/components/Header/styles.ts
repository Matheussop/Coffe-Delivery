import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a, div {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center; 
      align-items: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

    }

    a {
      color: ${(props) => props.theme['yellow-dark']};

      background-color: ${(props) => props.theme['yellow-light']};
      border-radius: 6px;

      padding: 0.5rem;
    }

    div {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
