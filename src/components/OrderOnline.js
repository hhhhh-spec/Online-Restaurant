import { useState } from "react";
import React from "react";
import { Heading, Box, Flex, Button, Text, Image, SimpleGrid, useToast, Badge, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

import { Cart } from "./Cart";

const categories = ["main course", "appetizers", "desserts", "drinks"];
const dishes = {
  'main course': [
    {
      title: "Greek salad",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      getImageSrc: require("../images/greek salad.jpg"),
    },
    {
      title: "Bruchetta",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      getImageSrc: require("../images/lemon dessert.jpg"),
    },
    {
      title: "Lemon dessert",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5.00",
      getImageSrc: require("../images/restauranfood.jpg"),
    },
    {
      title: "Lemon dessert",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5.00",
      getImageSrc: require("../images/restauranfood.jpg"),
    },
  ],
  'appetizers': [
    {
      title: "Greek salad",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      getImageSrc: require("../images/greek salad.jpg"),
    },
    {
      title: "Bruchetta",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      getImageSrc: require("../images/lemon dessert.jpg"),
    },
    {
      title: "Lemon dessert",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5.00",
      getImageSrc: require("../images/restauranfood.jpg"),
    },
  ],
  'desserts': [
    {
      title: "Greek salad",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      getImageSrc: require("../images/greek salad.jpg"),
    },
    {
      title: "Bruchetta",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      getImageSrc: require("../images/lemon dessert.jpg"),
    },
    {
      title: "Lemon dessert",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5.00",
      getImageSrc: require("../images/restauranfood.jpg"),
    },
  ],
  'drinks': [
    {
      title: "Greek salad",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      getImageSrc: require("../images/greek salad.jpg"),
    },
    {
      title: "Bruchetta",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      getImageSrc: require("../images/lemon dessert.jpg"),
    },
    {
      title: "Lemon dessert",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5.00",
      getImageSrc: require("../images/restauranfood.jpg"),
    },
  ],
};

function OrderOnline() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleAddToCart = (dish) => {
    dispatch(addToCart(dish)); // 添加商品到购物车

    // 显示 Toast 弹窗
    toast({
      title: `${dish.title} added to cart!`,
      description: `Price: ${dish.price}`,
      status: 'success', // 弹窗状态，可以是 "success"、"error"、"warning"、"info"
      duration: 3000, // 持续时间（毫秒）
      isClosable: true, // 是否可关闭
    });
  };
  return (
    <Flex h="100vh">
      {/* 侧栏 */}
      <Box w="20%" bg="#EDEFEE" p="4">
        {categories.map((category) => (
          <Button
            key={category}
            w="100%"
            bg={category === selectedCategory ? '#495E57' : 'transparent'}
            color={category === selectedCategory ? 'white' : '#333333'}
            onClick={() => setSelectedCategory(category)}
            _hover={{ bg: "#EE9972", color: "black" }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* 菜品展示区 */}
      <Box w="80%" p="4">
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          {selectedCategory}
        </Text>
        <SimpleGrid columns={4} spacing={4}>
          {dishes[selectedCategory].map((dish, index) => (
            <Box key={index} border="1px" borderColor="gray.300" borderRadius="md" p="4" boxShadow="md">
              <Image src={dish.getImageSrc} alt={dish.title} boxSize="150px" objectFit="cover" borderRadius="md" />
              <Heading size="md" mt="2">{dish.title}</Heading>
              <Text>{dish.price}</Text>
              <Button
                bg="#F4CE14"
                color="black"
                size="sm"
                onClick={() => handleAddToCart(dish)} // 点击添加到购物车
              >
                Add to cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Cart dir={false}/>
    </Flex>
  );
}

export default OrderOnline;