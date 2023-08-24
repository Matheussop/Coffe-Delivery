import { useState } from 'react'
import { ShoppingCart, Plus, Minus } from "phosphor-react";
import { ItemContainer, ItemInfo, QuantityContainer } from "./styles";

interface CoffeItemProps{
  name: string;
  type: string[];
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export function CoffeeItem(
  { name, type, description, image, price, quantity }: CoffeItemProps){
  const priceFormatted = price.toFixed(2).toString().replace('.',',');
  const [quantityValue, setQuantityValue] = useState<number>(quantity);
  
  const handleSubQuantity = () => {
    if(quantityValue > 0) {
      setQuantityValue(quantityValue - 1);
    }
  }
  const handleAddQuantity = () => {
    setQuantityValue(quantityValue + 1);
  }
  return (
    <ItemContainer >
      <img src={image} alt={name} />
      <ItemInfo >
        {
          type.map((item, index) => (
            <h4 key={index}>{item.toLocaleUpperCase()}</h4>
          ))
        }
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
          <button >
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </div>

      </ItemInfo>
    </ItemContainer>
  )
}