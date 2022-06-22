import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoppingCartOpenProvider } from './contexts/shoppingCartOpen';
import { ItemsCartProvider } from './contexts/itemsCart';
import { MoviesProvider } from './contexts/movies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ShoppingCartOpenProvider>
      <ItemsCartProvider>
        <MoviesProvider>
          <App />
        </MoviesProvider>
      </ItemsCartProvider>
    </ShoppingCartOpenProvider>
  </React.StrictMode>
);
