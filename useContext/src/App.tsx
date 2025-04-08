import './App.css';
import React, { useState } from 'react';
import CurrencyContext from './components/CurrencyContext';
import CurrencyContainer from './components/CurrencyContainer';

function App() {
  const [price, setPrice] = useState<number>(0);
  
  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  }

  return (
    <>
      <h2>Currency Converter</h2>
      <CurrencyContext.Provider value={price}>
        <h3>Enter price in USD:</h3>
        <input type="number" value={price} onChange={changePrice} />
        <CurrencyContainer/>
      </CurrencyContext.Provider>
    </>
  );
}

export default App
