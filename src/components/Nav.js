import { Link } from 'react-router-dom';
import React from 'react';
import {Image, HStack} from '@chakra-ui/react';
import ResponsiveGrid from './ResponsiveGrid';

function Nav() {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
      <ResponsiveGrid padding="6">
      <HStack justify="space-between" w="full" wrap="wrap" fontWeight="bold">
        <Image src={require('../images/Logo.png')} alt="logo" />
        <Link to="/">Home</Link>
        <a href="#about" onClick={handleClick("about")}>About</a>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
      </HStack>
      </ResponsiveGrid>
  );
}

export default Nav;