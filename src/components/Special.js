import { Grid, HStack, VStack, Button, Heading } from "@chakra-ui/react";
import Card from "./Card";
import React from "react";
import ResponsiveGrid from "./ResponsiveGrid";
import { Link } from 'react-router-dom';
const speciallist = [
  {
    title: "Greek salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    getImageSrc: () => require("../images/greek salad.jpg"),
  },
  {
    title: "Bruchetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
    getImageSrc: () => require("../images/lemon dessert.jpg"),
  },
  {
    title: "Lemon dessert",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
    getImageSrc: () => require("../images/restauranfood.jpg"),
  },
]

function Special() {
  return (
    <ResponsiveGrid>
      <VStack pb="8" pt="8">
        <HStack justify="space-between" w="full" wrap="wrap" pb="8" pt="8">
          <Heading size="2xl" color="black">This Week Specials!</Heading>
          <Link to="/order-online"><Button bg="#F4CE14" color="black"
            _hover={{ bg: "#EE9972", color: "black" }}
          >Online Menu</Button></Link>
        </HStack>
        <Grid
          templateColumns=
          {{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
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
      </VStack>
    </ResponsiveGrid>
  );
}

export default Special;