import { HStack,VStack,Grid,GridItem,Box, Button,Heading } from "@chakra-ui/react";
import Card from "./Card";
import React from "react";

const speciallist = [
  {
    title:"Greek salad",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price:"$12.99",
    getImageSrc: () => require("../images/greek salad.jpg"),
  },
  {
    title:"Bruchetta",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price:"$5.99",
    getImageSrc: () => require("../images/lemon dessert.jpg"),
  },
  {
    title:"Lemon dessert",
    description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price:"$5.00",
    getImageSrc: () => require("../images/restauranfood.jpg"),
  },
]

function Special() {
  return (
    <Box bg="white" p={4}>
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
    <GridItem colStart={3} colEnd={11}>
    <VStack pb={8}>
        <HStack justify="space-between" pt="10" w="full" pb="50px">
        <Heading size="2xl" color="black">This Week Specials!</Heading>
        <Button bg="#F4CE14" color="black">Online Menu</Button>
        </HStack>
        <HStack>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {speciallist.map((special) => (
          <Card
            key={special.title}
            title={special.title}
            description={special.description}
            price={special.price}
            imageSrc={special.getImageSrc()}
          />
        ))}
        </Grid>
        </HStack>
    </VStack>
    </GridItem>
    </Grid>
    </Box>
  );
}

export default Special;