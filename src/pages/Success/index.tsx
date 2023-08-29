import { MapPin, Timer, CurrencyDollar  } from "phosphor-react";
import { useContext} from "react";
import { CartContext } from "../../contexts/CartContext";
import ImageSuccess from "../../assets/imageSuccess.svg";
import { MainTitle, Subtitle, PurchaseInfo,
   AddressInfo, DeliveryTime, DeliveryText,
  PaymentOption, PaymentText, ImageView, MainContent,
   Container, ContentContainer, Address, IconContainer,
  TimerContent, PaymentContent} from "./style";

export function Success() {
  const { getPurchaseItems } = useContext(CartContext);
  const { address, paymentMethod} = getPurchaseItems
  const paymentMethodFormatted = paymentMethod === "credit" ? 
    "Cartão de credito" : paymentMethod == "debit" ? 
    "Cartão de debito" : "Dinheiro"
    
  return (
    <Container>
      <MainContent>
        <MainTitle>Uhu! Pedido confirmado</MainTitle>
        <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
        <ContentContainer>
          <PurchaseInfo>
            <AddressInfo>
              <IconContainer>
                <MapPin width="1rem" weight="fill"/>
              </IconContainer>
              <Address>
                <p>Entrega em 
                  <span> {address.street}, {address.streetNumber}</span>
                </p>
                <p>{address.district} - {address.city}, {address.state}</p>
              </Address>
            </AddressInfo>
            <DeliveryTime>
              <IconContainer>
                <Timer width="1rem" weight="fill"/>
              </IconContainer>
                <TimerContent>
                  <p>Previsão de entrega</p>
                  <span>20 min - 30 min </span>
                </TimerContent>
              <DeliveryText></DeliveryText>
            </DeliveryTime>
            <PaymentOption>
              <IconContainer>
                <CurrencyDollar width="1rem" weight="fill"/>
              </IconContainer>
              <PaymentContent>
                <p>Pagamento na entrega</p>
                <PaymentText>{paymentMethodFormatted}</PaymentText>
              </PaymentContent>
            </PaymentOption>
          </PurchaseInfo>
          <ImageView>
            <img src={ImageSuccess} alt="Image to represent a success purchase" />
          </ImageView>
        </ContentContainer>
      </MainContent>
    </Container>
  );
}