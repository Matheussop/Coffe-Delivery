import { useContext, useState, useEffect } from 'react'
import { ShoppingCart, Plus, Minus } from "phosphor-react";

import { ItemContainer, ItemInfo, QuantityContainer, TypeContainer } from "./styles";
import { CartContext, Item } from '../../../../contexts/CartContext'

export interface CoffeeItemProps{
  id: string;
  name: string;
  type: string[];
  description: string;
  image: string;
  price: number;
}

export function CoffeeItem(
  { id, name, type, description, image, price }: CoffeeItemProps){
  const priceFormatted = price.toFixed(2).toString().replace('.',',');
 
  const [ itemInCart, setItemInCart] = useState<Item>({
    id,
    quantity: 0
  } as Item);

  const { items, addItem } = useContext(CartContext);
  useEffect(() => {
    const item = items.find((item) => item.id === id);
    if(item){
      setItemInCart(item);
    }

  }, [items, id])
  const handleSubQuantity = () => {
    if(itemInCart.quantity > 0) {
      setItemInCart((prevState) => ({...prevState, quantity: prevState.quantity - 1 }));
    }
  }
  const handleAddQuantity = () => {
    setItemInCart((prevState) => ({...prevState, quantity: prevState.quantity + 1 }));
  }

  const handleAddItem = () => {
    if( itemInCart.quantity <= 0) {
      alert('A Quantidade deve ser maior que 0');
      return
    }
    if(itemInCart) {
      addItem({
        id,
        quantity: itemInCart.quantity,
      });
    }
  }

  return (
    <ItemContainer >
      <img src={image} alt={name} />
      <ItemInfo >
        <TypeContainer>
          {
            type.map((item, index) => (
              <h4 key={index}>{item.toLocaleUpperCase()}</h4>
            ))
          }
        </TypeContainer>
       
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <p>R$ <span>{priceFormatted}</span></p>
          <QuantityContainer>
            <button onClick={handleSubQuantity}>
              <Minus weight="bold"/>
            </button>
            <span>{itemInCart.quantity}</span>
            <button onClick={handleAddQuantity}>
              <Plus weight="bold"/>
            </button>
          </QuantityContainer>
          <button onClick={handleAddItem}>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </div>

      </ItemInfo>
    </ItemContainer>
  )
}