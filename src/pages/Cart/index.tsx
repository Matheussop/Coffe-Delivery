import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash, Plus, Minus, MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";


import { InputText } from "../../components/Input";
import { SelectableButton } from "../../components/SelectableButton";
import { AddressContainer, AddressForm, ComplementContainer, Container, 
  ItemsContainer, NumberContainer, PaymentOptions, 
  PaymentOptionsContainer, QuantityContainer, ShopContainer, 
  ShopInfoContainer, StreetContainer, ZipContainer,
  ItemContainer, TrashContainer, ItemButtons, PriceContainer,
  Separator, TaxTransportation, TotalContainer, TotalCost, 
  TotalCostItems, ItemButtonsContainer } from "./styles"
import { CartContext } from "../../contexts/CartContext";
import { CoffeeItemProps } from "../Home/components/CoffeItem";
import { CoffeeData } from "../Home/CoffeesData";

const ItemsData: CoffeeItemProps[] = CoffeeData

export type ItemsProps = Omit<CoffeeItemProps, 'price'> & { 
  price: string
  quantity: number;

};

export function Cart() {
  const { items } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'money'>('credit');
  const [listemItem, setListemItem] = useState<ItemsProps[]>([]);
  const quantityValue = 1
  const navigate = useNavigate();

  const handleSubQuantityItem = () => {}
  const handleAddQuantityItem = () => {}
  const handleChangePaymentMethod = (paymentType: 'credit' | 'debit' | 'money') => {
    setPaymentMethod(paymentType)
  }

  useEffect(() => {
    const listItem: ItemsProps[] = []
    if (items && items.length > 0) {
      items.forEach(item => {
        const { price, ...isItem} = ItemsData.find(itemData => item.id === itemData.id)!
        if(isItem) {
          const priceFormatted = price.toFixed(2).toString().replace('.',',');
          
          listItem.push({ quantity: quantityValue, price: priceFormatted, ...isItem})
        }else {
          alert('Item does not exist')
        }
      })
      setListemItem(listItem)
    }

  }, [items, navigate])

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
        <div>
          {
            listemItem.map((item) => (
            <>
              <ItemContainer key={item.id}>
                <img src={item.image} alt="Capuccino"/>
                <div>
                  <h3>{item.name}</h3>
                  <ItemButtons>
                    <QuantityContainer>
                    <button onClick={handleSubQuantityItem}>
                      <Minus weight="bold"/>
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={handleAddQuantityItem}>
                      <Plus weight="bold"/>
                    </button>
                    </QuantityContainer>
                    <TrashContainer onClick={() => {}}>
                      <Trash weight="fill" size={22}/>
                      REMOVER
                    </TrashContainer>
                  </ItemButtons>
              </div>
              <PriceContainer>
                <span>R$ {item.price}</span>
              </PriceContainer>
            </ItemContainer>
            <Separator/>
           </>
          ))
        }
        <TotalContainer>
          <TotalCostItems>
            <h3>Total de itens</h3>
            <span>R$ 0,00</span>
          </TotalCostItems>
          <TaxTransportation>
            <h3>Entrega</h3>
            <span>R$ 0,00</span>
          </TaxTransportation>
          <TotalCost>
            <h3>Total</h3>
            <span>R$ 0,00</span>
          </TotalCost>
        </TotalContainer>
        </div>
        <ItemButtonsContainer onClick={() => navigate('/')}>
            CONFIRMAR PEDIDO
        </ItemButtonsContainer>
      </ShopContainer>
    </ItemsContainer>
  </Container>
  )
}