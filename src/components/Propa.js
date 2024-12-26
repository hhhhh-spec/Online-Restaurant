import { Box, Image, Flex, VStack, Heading, Text,Grid, GridItem, HStack, Button } from '@chakra-ui/react';

function Propa() {
  return (
    <Box bg="#495E57" pt="100px">
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colStart={3} colEnd={11}>
    <HStack spacing={4} justify="space-between" align="center" p={4}>
      <VStack spacing={6} align="start" justify="center">
        <Heading size="3xl" color="#F4CE14">Little Lemon</Heading>
        <Heading size="lg" color="white">Chicago</Heading>
        <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Hinc probo epicurei ei vim. Ne imperdiet repudiare qui, meis nulla et eum. Vide repudiare scriptorem nec eu, paulo consul mel in. Sea eu graeco conceptam maiestatis, pro ridens graeco epicuri et.
        </Text>
        <Button bg="#F4CE14" color="black">Reserve a table</Button>
      </VStack>
      <Image src={require('../images/restauranfood.jpg')} alt="restaurant" width="250px" borderRadius="lg"/>
    </HStack>
    </GridItem>
    </Grid>
    </Box>
  );
}

export default Propa;