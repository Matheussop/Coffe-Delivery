import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({theme}) => theme.colors["base-card"]};

  max-width: 23%;
  border-radius: 6px 36px 6px 36px;

  margin-top: 4.5rem;

  img {
    margin-top: -1.2rem;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1.2rem;
  
  h3 {
    font-family: '${({ theme }) => theme.fonts.title}';
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  h4 {
    font-family: '${({ theme }) => theme.fonts.text}';
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    font-size: 10px;
    font-weight: 800;
    
    background-color: ${({ theme }) => theme.colors["yellow-light"]};

    padding: 5px 10px;
    border-radius: 100px;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    
  }

  p {
    font-family: '${({ theme }) => theme.fonts.text}';
    color: ${({ theme }) => theme.colors["base-label"]};
    font-size: 14px;
    line-height: 130%;
  }

  > div {
    margin-top: 2.2rem;
    margin-bottom: 1.4rem;
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: space-around;
    
    p {
      width: 100%;
      text-align: center;
      span {
        font-family: '${({ theme }) => theme.fonts.title}';
        color: ${({ theme }) => theme.colors["base-text"]};

        font-size: 24px;
        font-weight: bold;
      }
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.colors["purple-dark"]};
      border: none;
      border-radius: 6px;
      color: ${({ theme }) => theme.colors["white"]};


      padding: 0.5rem;
    }
  }
  
`;

export const QuantityContainer = styled.div`
  display: flex ;
  align-items: center;
  justify-content: space-around;


  padding: 0.8rem 0.5rem;
  margin-right: 0.5rem;

  border-radius: 6px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-button"]};

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors["purple"]};

  }
`;