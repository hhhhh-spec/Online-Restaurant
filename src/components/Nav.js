import { Link } from 'react-router-dom';
import React from 'react';
import { Box, Image, HStack, Grid, GridItem } from '@chakra-ui/react';
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
    <Box
      bg="white"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
    >
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colStart={3} colEnd={11}>
      <HStack
        justify="center" // 水平居中每个子元素
        align="center" // 垂直居中每个子元素
        w="full"
        fontFamily="karla"
        fontWeight="bold"
        gap={6}
        p={6}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center'}}><Image src={require('../images/Logo.png')} alt="logo" /><span style={{ marginLeft: "12px" }}>Home</span></Link>
        <a href="/about" onClick={handleClick("about")}>About</a>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
      </HStack>
      </GridItem>
      </Grid>
    </Box>
  );
}

export default Nav;