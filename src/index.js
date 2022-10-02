import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from "./components/context/authcontext"
import PassContextProvider from "./components/context/passcontext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PassContextProvider>
  <AuthContextProvider>
  <ChakraProvider>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </ChakraProvider>
  </AuthContextProvider>
  </PassContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
