import { ReactNode, createContext, useState } from 'react'

export interface Item { 
  id: string
  quantity: number
}

export interface Address{
  street: string
  city: string
  state: string
  streetNumber: string
  district: string
  complement: string
  zipCode: string
}

interface CartContextType{
  items: Item[],
  setItemsContext: (items: Item[]) => void,
  addItem: (itemId: Item) => void,
  changeItemQuantity: (itemId: string, quantity: number) => void,
  removeItem: (itemId: string) => void,
  setPurchaseItemsContext: (objectPurchase: PurchaseItemType) => void
  getPurchaseItems: PurchaseItemType
}

export interface PurchaseItemType {
  id: string,
  address: Address,
  paymentMethod: 'credit' | 'debit' | 'money'
  items: Item[],
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps){
  const [items, setItems] = useState<Item[]>([]);
  const [purchaseItems, setPurchaseItems] = useState<PurchaseItemType>({} as PurchaseItemType);

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

  function setItemsContext(items: Item[]) {
    setItems(items);
  }

  function setPurchaseItemsContext(objectPurchase: PurchaseItemType) {
    setPurchaseItems(objectPurchase);
  }

  return (
    <CartContext.Provider value={{ 
      items, setItemsContext, addItem, 
      changeItemQuantity, removeItem,
      getPurchaseItems: purchaseItems, setPurchaseItemsContext
    }}>
      {children}
    </CartContext.Provider>
  )
}