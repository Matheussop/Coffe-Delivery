import { useContext, useState } from 'react'
import { ShoppingCart, Plus, Minus } from "phosphor-react";

import { ItemContainer, ItemInfo, QuantityContainer, TypeContainer } from "./styles";
import { CartContext } from '../../../../contexts/CartContext'

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
 
  const [quantityValue, setQuantityValue] = useState<number>(0);
  
  const { items, addItem } = useContext(CartContext);

  const handleSubQuantity = () => {
    if(quantityValue > 0) {
      setQuantityValue(quantityValue - 1);
    }
  }
  const handleAddQuantity = () => {
    setQuantityValue(quantityValue + 1);
  }

  const handleAddItem = () => {
    if( quantityValue <= 0) {
      alert('A Quantidade deve ser maior que 0');
      return
    }
    const itemInCart = items.find((item) => item.id === id);
    if(!itemInCart) {
      addItem({
        id,
        quantity: quantityValue,
      });
    }else {
      alert('Este já adicionado ao carrinho!');
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
            <span>{quantityValue}</span>
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