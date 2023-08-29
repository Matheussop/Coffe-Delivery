import { ReactNode, createContext, useState } from 'react'

export interface Item { 
  id: string
  quantity: number
}

interface CartContextType{
  items: Item[],
  addItem: (itemId: Item) => void,
  changeItemQuantity: (itemId: string, quantity: number) => void
  removeItem: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps){
  const [items, setItems] = useState<Item[]>([]);

  function addItem({id, quantity}: Item) {
    const itemsAux = [...items, { id, quantity }];
    setItems(itemsAux);
  }

  function changeItemQuantity(itemId: string, quantity: number) {
    const itemsAux = items.map(item => {
      if(item.id === itemId){
        return {
        ...item,
          quantity
        }
      }
      return item;
    });
    setItems(itemsAux);
  }

  function removeItem(itemId: string) {
    const itemsAux = items.filter(item => item.id!== itemId);
    setItems(itemsAux);
  }

  return (
    <CartContext.Provider value={{ items, addItem, changeItemQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}