import React from 'react';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import Message from './components/Message/Message';
import Button from './components/Button/Button';

const App = () => {
  const buttonClick = () => {
   alert("Кнопка була натиснута!")
  };

  return (
    <div className="app">
      <Greeting name="Іван" />
      <Message text="Це повідомлення." />
      <Button onClick={buttonClick} />
    </div>
  );
};

export default App;
