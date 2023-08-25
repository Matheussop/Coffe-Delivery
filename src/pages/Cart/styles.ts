import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 64%;
  margin: 5.875rem 0;
  gap: 2rem;

  h1 {
    font-family:  '${(props) => props.theme.fonts.title}';
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const ShopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 498px;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 2.2rem;
  gap: 2rem;

  > div:first-child { 
    display: flex;
    gap: 0.5rem;
  }

  div svg{
    color: ${(props) => props.theme.colors.yellow};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.8rem;
  -webkit-box-align: center;
  align-items: center;

`;

export const ZipContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
`;

export const StreetContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

export const NumberContainer = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
`;

export const ComplementContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
`;

export const PaymentOptionsContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 2.2rem;
`;

export const PaymentOptions = styled.div`

`;

export const ShopContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 2.2rem;
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
