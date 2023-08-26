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
    margin-bottom: 1rem;

  }

`;

export const ShopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  h3 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-weight: 400;
    line-height: 130%;
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 37%;

  h3 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-weight: 400;
    line-height: 130%;
    font-size: 1rem;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 2.2rem;
  gap: 2rem;

  margin-bottom: 0.8rem;

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
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 2.2rem;
  gap: 2rem;

  > div:first-child { 
    display: flex;
    gap: 0.5rem;
  }

  svg{
    color: ${(props) => props.theme.colors.purple};
  }

`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const ShopContainer = styled.div`
  display: flex;
  border-radius: 6px 36px 6px 36px;
  
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 2.2rem;
  flex-direction: column;
  
  width: 100%;

  > div {
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
  }
`;

export const QuantityContainer = styled.div`
  display: flex ;
  align-items: center;
  justify-content: space-around;

  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors["base-button"]};
  min-width: 70px;
  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors["purple"]};
  }
`;

export const TrashContainer = styled.button`
     
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors["base-button"]};
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: 0.8rem;
  border: none;
  border-radius: 0.4rem;

  svg {
    color: ${(props) => props.theme.colors.purple};
    margin-right: 0.2rem;
  }
`;

export const ItemButtons = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors["base-text"]};
  line-height: 130%;
  border-radius: 0.4rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  svg { 
    width: 1rem;
  }

`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  img {
    width: 4rem;
  }

`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span{
    font-family: '${(props) => props.theme.fonts.text}';
    font-size: 1rem;
    font-weight: bold;
  }
`

export const Separator = styled.div`
  height: 1px;
  border: 1px solid;
  width: 100%;
  color: ${(props) => props.theme.colors["base-button"]};
`;


export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;
export const TotalCostItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-family: '${(props) => props.theme.fonts.text}';
  font-weight: 400;
  color: ${(props) => props.theme.colors["base-text"]};
  line-height: 130%;

  h3 {
    font-size: 0.85rem;
  }

  span {
    font-size: 1rem;
  }

`;
export const TaxTransportation = styled(TotalCostItems)``;
export const TotalCost = styled(TotalCostItems)`
  h3, span{
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const ItemButtonsContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors["yellow"]};
  color: ${(props) => props.theme.colors["white"]};
  padding: 0.8rem;
  border: none;
  border-radius: 0.4rem;
  margin-top: 1.4rem;
`;