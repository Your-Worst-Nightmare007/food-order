import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/header';
import Meals from './components/Meals/meals';
import Cart from './components/Cart/cart';
import CartProvider from './store/cartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
