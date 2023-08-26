import { useState } from "react";
import { InputText } from "../../components/Input";
import { SelectableButton } from "../../components/SelectableButton";
import { ItemContainer } from "../Home/components/CoffeItem/styles";
import { AddressContainer, AddressForm, ComplementContainer, Container, 
  ItemsContainer, NumberContainer, PaymentOptions, 
  PaymentOptionsContainer, QuantityContainer, ShopContainer, ShopInfoContainer, StreetContainer, ZipContainer } from "./styles"
import { Trash, Plus, Minus, MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'money'>('credit');
  const price = 9.90
  const priceFormatted = price.toFixed(2).toString().replace('.',',');
  const quantityValue = 1
  const handleSubQuantityItem = () => {}
  const handleAddQuantityItem = () => {}
  const handleChangePaymentMethod = (paymentType: 'credit' | 'debit' | 'money') => {
    setPaymentMethod(paymentType)
  }

  return (
    <Container>
    <ShopInfoContainer >
      <h1>Complete seu pedido</h1>
      <AddressContainer>
        <div>
          <MapPinLine size={22} weight='light'/>
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <AddressForm>
          <ZipContainer>
            <InputText placeholder="CEP"/>
          </ZipContainer>
          <StreetContainer>
            <InputText placeholder="Rua"/>
          </StreetContainer>
          <NumberContainer>
            <InputText placeholder="Numero"/>
          </NumberContainer>
          <ComplementContainer>
            <InputText placeholder="Complemento" suffix="Opcional"/>
          </ComplementContainer>
          <InputText placeholder="Bairro"/>
          <InputText placeholder="Cidade"/>
          <InputText placeholder="Estado"/>
        </AddressForm>
      </AddressContainer>
      <PaymentOptionsContainer >
        <div>
          <CurrencyDollar size={22} weight='light'/>
          <div>
            <h3>Pagamento</h3>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>


        <PaymentOptions>
          <SelectableButton typeMethod='credit' 
            isSelect={paymentMethod}
            onClick={() => handleChangePaymentMethod('credit')} 
            icon={<CreditCard/>} text='CARTÃO DE CRÉDITO'/>
          <SelectableButton typeMethod='debit' 
            isSelect={paymentMethod}
            onClick={() => handleChangePaymentMethod('debit')}
            icon={<Bank/>} text='CARTÃO DE DÉBITO'/>
          <SelectableButton typeMethod='money' 
            isSelect={paymentMethod}
            onClick={() => handleChangePaymentMethod('money')}
            icon={<Money/>} text='DINHEIRO'/>
        </PaymentOptions>
      </PaymentOptionsContainer>
    </ShopInfoContainer>
    <ItemsContainer>
      <h1>Cafés selecionados</h1>
      <ShopContainer>
        <ItemContainer>
        <div>
          <p>R$ <span>{priceFormatted}</span></p>
          <QuantityContainer>
            <button onClick={handleSubQuantityItem}>
              <Minus weight="bold"/>
            </button>
            <span>{quantityValue}</span>
            <button onClick={handleAddQuantityItem}>
              <Plus weight="bold"/>
            </button>
          </QuantityContainer>
          <button onClick={() => {}}>
            <Trash weight="fill" size={22}/>
          </button>
        </div>
        </ItemContainer>
      </ShopContainer>
    </ItemsContainer>
  </Container>
  )
}