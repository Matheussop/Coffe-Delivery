import { ReactNode, createContext, useState } from 'react'

interface Item { 
  id: string
  quantity: number
}

interface CartContextType{
  items: Item[],
  addItem: (itemId: Item) => void
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

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}