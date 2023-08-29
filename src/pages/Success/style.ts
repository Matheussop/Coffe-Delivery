import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  max-width: 64%;
  width: 100%;
  margin-top: 5rem;
`
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;

`
export const ContentContainer = styled.div`
  margin-top: 2.4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6.5rem;
`
export const MainTitle = styled.h1`
  font-family:  '${(props) => props.theme.fonts.title}';
  color: ${(props) => props.theme.colors["yellow-dark"]};
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 1rem;
`
export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 130%;
`
export const PurchaseInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`

export const PurchaseInfoBorder = styled.div`
  border-radius: 6px 36px 6px 36px;
  padding: 1px;
  width: 100%;
  
  background: linear-gradient(to right, rgb(219, 172, 44), rgb(128, 71, 248));
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 0.8rem;

  > div:first-child{
    background-color: ${(props) => props.theme.colors["purple"]};
  }
`

export const IconContainer = styled.div`
    height: fit-content;
    padding: 0.5rem;
    border-radius: 999px;
    display: flex;

    svg{
      color: ${(props) => props.theme.colors.white};
    }
`;

export const Address = styled.div`
  font-family: '${(props) => props.theme.fonts.text}';
  color: ${(props) => props.theme.colors["base-text"]};
  line-height: 130%;
  span {
    font-weight: bold;
  }
`

export const TimerContent = styled(Address)``

export const PaymentContent = styled(Address)``

export const DeliveryTime = styled(AddressInfo)`
  div:first-child {
    background-color: ${(props) => props.theme.colors["yellow"]}
  }
`
export const DeliveryText = styled.p``
export const PaymentOption = styled(AddressInfo)`
  div:first-child {
    background-color: ${(props) => props.theme.colors["yellow-dark"]}
  }
`
export const PaymentText = styled.span``
export const ImageView = styled.div``