import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Trash, Plus, Minus, MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { InputText } from "../../components/Input";
import { SelectableButton } from "../../components/SelectableButton";
import { AddressContainer, AddressForm, ComplementContainer, Container, 
  ItemsContainer, NumberContainer, PaymentOptions, 
  PaymentOptionsContainer, QuantityContainer, ShopContainer, 
  ShopInfoContainer, StreetContainer, ZipContainer,
  ItemContainer, TrashContainer, ItemButtons, PriceContainer,
  Separator, TaxTransportation, TotalContainer, TotalCost, 
  TotalCostItems, ItemButtonsContainer, FormError, CityContainer,
   DistrictContainer, StateContainer, ItemContainerSeparator } from "./styles"
import { CartContext } from "../../contexts/CartContext";
import { CoffeeItemProps } from "../Home/components/CoffeItem";
import { CoffeeData } from "../Home/CoffeesData";

const ItemsData: CoffeeItemProps[] = CoffeeData

export type ItemsProps = Omit<CoffeeItemProps, 'price'> & { 
  price: number
  quantity: number;
  fullPrice: string;
};

const shopFormValidationSchema = z.object({
  street: z.string().min(3, { message: 'Informe o nome da rua'}),
  streetNumber: z.string().min(1,{ message: 'Informe o número da rua'}),
  district: z.string().min(3, { message: 'Informe o bairro'}),
  city: z.string().min(3, { message: 'Informe a cidade'}),
  state: z.string().length(2, 'Informe a sigla do estado'),
  complement: z.string().optional(),
  zipCode: z.string().regex(new RegExp("\\d{5}-\\d{3}"), { message: 'Informe o código postal'})
  .refine((value) => {
    if (value.length >= 6) {
      return value.substring(0, 4) + "-" + value.substring(5);
    }else 
    return value
  }),
})

type ShopFormData = z.infer<typeof shopFormValidationSchema>

export function Cart() {

  const { items } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'money'>('credit');
  const [listemItem, setListemItem] = useState<ItemsProps[]>([]);
  const [fullPriceShop, setFullPriceShop] = useState('');
  const [fullPriceWithTax, setFullPriceWithTax] = useState('');
  const navigate = useNavigate();
  const tax = 3.50;
  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ShopFormData>({
    resolver: zodResolver(shopFormValidationSchema),
  })

  const calculateFullPriceShop = useCallback(() => {
    const price = listemItem.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    setFullPriceShop(price.toFixed(2).toString().replace('.',','))
    setFullPriceWithTax((price + tax).toFixed(2).toString().replace('.',','))
  }, [listemItem]);
  
  const handleSubQuantityItem = (itemId: string) => {
    const item = listemItem.find((item) => item.id === itemId);
    if (item && item.quantity <= 0) {
      return
    }
    if (item) {
      const newQuantity = item.quantity - 1;
      const priceFormatted = (item.price*newQuantity).toFixed(2).toString().replace('.',',');
      setListemItem(() => {
        return listemItem.map((item) => item.id === itemId? {...item, fullPrice: priceFormatted, quantity: newQuantity } : item)
      });
      calculateFullPriceShop()
    }
    
  }

  const handleAddQuantityItem = (itemId: string) => {
    const item = listemItem.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + 1;
      const priceFormatted = (item.price*newQuantity).toFixed(2).toString().replace('.',',');
      setListemItem(listemItem.map((item) => item.id === itemId? {...item, fullPrice: priceFormatted, quantity: newQuantity } : item));
      calculateFullPriceShop()
    }
  }

  const handleRemoveItem = (itemId: string) => {
    setListemItem(listemItem.filter((item) => item.id !== itemId));
    calculateFullPriceShop()
  }

  const handleChangePaymentMethod = (paymentType: 'credit' | 'debit' | 'money') => {
    setPaymentMethod(paymentType)
  }

  function handleRegister(item){
    console.log(item)
  }

  useEffect(() => {
    listemItem && calculateFullPriceShop()
  }, [listemItem, calculateFullPriceShop])

  useEffect(() => {
    const listItem: ItemsProps[] = []
    if (items && items.length > 0) {
      items.forEach(item => {
        const { price, ...isItem} = ItemsData.find(itemData => item.id === itemData.id)!
        if(isItem) {
          const priceFormatted = (price*item.quantity).toFixed(2).toString().replace('.',',');
          
          listItem.push({ quantity: item.quantity, fullPrice: priceFormatted, price, ...isItem})
        }else {
          alert('Item does not exist')
        }
      })
      setListemItem(listItem)
    }

    // Here would come the logic of tax calculation
  }, [items, navigate])

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
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
              <InputText placeholder="CEP" {...register("zipCode")}/>
              {errors.zipCode && (
                <FormError>{errors.zipCode.message}</FormError>
              )}
            </ZipContainer>
            <StreetContainer>
              <InputText placeholder="Rua" {...register("street")}/>
              {errors.street && (
                <FormError>{errors.street.message}</FormError>
              )}
            </StreetContainer>
            <NumberContainer>
              <InputText type="number" placeholder="Numero"  {...register("streetNumber")}/>
              {errors.streetNumber && (
                <FormError>{errors.streetNumber.message}</FormError>
              )}
            </NumberContainer>
            <ComplementContainer>
              <InputText placeholder="Complemento" 
              suffix="Opcional" {...register("complement")}/>
            </ComplementContainer>
            <DistrictContainer>
              <InputText placeholder="Bairro" {...register("district")}/>
              {errors.district && (
                <FormError>{errors.district.message}</FormError>
              )}
            </DistrictContainer>
            <CityContainer>
              <InputText placeholder="Cidade" {...register("city")}/>
              {errors.city && (
                <FormError>{errors.city.message}</FormError>
              )}
            </CityContainer>
            <StateContainer>
              <InputText placeholder="Estado" {...register("state")}/>
              {errors.state && (
                <FormError>{errors.state.message}</FormError>
              )}
            </StateContainer>
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
            <ItemContainerSeparator key={item.id}>
              <ItemContainer key={item.id}>
                  <img src={item.image} alt="Capuccino"/>
                  <div>
                    <h3>{item.name}</h3>
                    <ItemButtons>
                      <QuantityContainer>
                      <button onClick={() => handleSubQuantityItem(item.id)}>
                        <Minus weight="bold"/>
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleAddQuantityItem(item.id)}>
                        <Plus weight="bold"/>
                      </button>
                      </QuantityContainer>
                      <TrashContainer onClick={() => handleRemoveItem(item.id)}>
                        <Trash weight="fill" size={22}/>
                        REMOVER
                      </TrashContainer>
                    </ItemButtons>
                </div>
                <PriceContainer>
                  <span>R$ {item.fullPrice}</span>
                </PriceContainer>
              </ItemContainer>
              <Separator/>
           </ItemContainerSeparator>
          ))
        }
        <TotalContainer>
          <TotalCostItems>
            <h3>Total de itens</h3>
            <span>R$ {fullPriceShop}</span>
          </TotalCostItems>
          <TaxTransportation>
            <h3>Entrega</h3>
            <span>R$ {tax.toFixed(2).toString().replace('.',',')}</span>
          </TaxTransportation>
          <TotalCost>
            <h3>Total</h3>
            <span>R$ {fullPriceWithTax}</span>
          </TotalCost>
        </TotalContainer>
        </div>
        <ItemButtonsContainer type="submit" disabled={isSubmitting}>
            CONFIRMAR PEDIDO
        </ItemButtonsContainer>
      </ShopContainer>
    </ItemsContainer>
  </Container>
  )
}