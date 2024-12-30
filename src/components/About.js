import { Image, VStack, Heading, Text, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ResponsiveGrid from './ResponsiveGrid';

function About() {
  return (
    <ResponsiveGrid>
      <HStack justify="space-between" w="full" pb="4" pt="4">
        <VStack justify="flex-start" align="flex-start" spacing="4">
          <Heading size="3xl" color="#495E57" id="about-section">Little Lemon</Heading>
          <Heading size="lg" color="#333333">Chicago</Heading>
          <Text color="#333333">
          Little Lemon Restaurant offers a delightful dining experience with a focus on Mediterranean cuisine. Our menu features a rich variety of dishes inspired by the vibrant and healthy flavors of the Mediterranean region, from fresh seafood and grilled meats to flavorful salads and traditional sides. Whether you're a fan of classic Greek delicacies or love the bold tastes of Moroccan spices, Little Lemon promises a unique culinary journey. We pride ourselves on using the finest ingredients to create dishes that are both delicious and nourishing. Come and enjoy a taste of the Mediterranean at Little Lemon, where every meal is a celebration of flavor!
          </Text>
        </VStack>
        <Image src={require('../images/restauranfood.jpg')} alt="restaurant" borderRadius="lg" w={{ base: "50%", md: "35%", lg: "30%" }}/>
      </HStack>
    </ResponsiveGrid>
  );
}

export default About;