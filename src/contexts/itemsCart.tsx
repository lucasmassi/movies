import React, { useState } from 'react';

export const ItemsCartContext = React.createContext<any>({});
 
export const ItemsCartProvider: any = (props: any) => {
  const [itemsCart, setItemsCart] = useState([])

  return (
    <ItemsCartContext.Provider value={{ itemsCart, setItemsCart }}>
      {props.children}
    </ItemsCartContext.Provider>
  )
}
