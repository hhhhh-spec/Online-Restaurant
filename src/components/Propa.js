import { Image, VStack, Heading, Text, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ResponsiveGrid from './ResponsiveGrid';

function Propa() {
  return (
    <ResponsiveGrid bgColor='#495E57'>
      <HStack justify="space-between" w="full" pb="4" pt="4">
        <VStack justify="flex-start" align="flex-start" spacing="4">
          <Heading size="4xl" color="#F4CE14">Little Lemon</Heading>
          <Heading size="lg" color="white">Chicago</Heading>
          <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Hinc probo epicurei ei vim. Ne imperdiet repudiare qui, meis nulla et eum. Vide repudiare scriptorem nec eu, paulo consul mel in. Sea eu graeco conceptam maiestatis, pro ridens graeco epicuri et.
          </Text>
          <Link to="/reservations"><Button bg="#F4CE14" color="black"
            _hover={{ bg: "#EE9972", color: "black" }}
          >Reserve a table</Button></Link>
        </VStack>
        <Image src={require('../images/restauranfood.jpg')} alt="restaurant" borderRadius="lg" w={{ base: "50%", md: "35%", lg: "30%" }}/>
      </HStack>
    </ResponsiveGrid>
  );
}

export default Propa;