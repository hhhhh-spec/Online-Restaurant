import './App.css';
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import {Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
function App() {
  return (
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="reservations" element={<Reservations />} />
            <Route path="order-online" element={<OrderOnline />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
    </ChakraProvider>
  );
}

export default App;
