import React, { useState } from 'react';

export const ShoppingCartOpenContext = React.createContext<any>(false);
 
export const ShoppingCartOpenProvider: any = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ShoppingCartOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </ShoppingCartOpenContext.Provider>
  )
}
