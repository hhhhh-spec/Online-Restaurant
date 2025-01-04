import './App.css';
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import ConfirmedBooking from './components/ConfirmedBooking';
import theme from './API/theme';
import {AlertProvider} from './context/alertContext';
import Alert from './components/Alert';
import Nav from './components/Nav';
import About from './components/About';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
      <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="order-online" element={<OrderOnline />} />
            <Route path="login" element={<Login />} />
            <Route path="confirm-booking" element={<ConfirmedBooking />} />
        </Routes>
        <Alert />
        </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
