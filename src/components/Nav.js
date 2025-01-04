import { NavLink } from 'react-router-dom';
import React from 'react';
import {Image, HStack} from '@chakra-ui/react';
import ResponsiveGrid from './ResponsiveGrid';

function Nav() {
  return (
      <ResponsiveGrid padding="6">
      <HStack justify="space-between" w="full" wrap="wrap" fontWeight="bold">
        <Image src={require('../images/Logo.png')} alt="logo" />
        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
        <NavLink to="/about"   className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
        <NavLink to="/reservations"   className={({ isActive }) => (isActive ? 'active-link' : '')}>Reservations</NavLink>
        <NavLink to="/order-online"   className={({ isActive }) => (isActive ? 'active-link' : '')}>Order Online</NavLink>
        <NavLink to="/login"   className={({ isActive }) => (isActive ? 'active-link' : '')}>Login</NavLink>
      </HStack>
      </ResponsiveGrid>
  );
}

export default Nav;