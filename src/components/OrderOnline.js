import { useState } from "react";
import React from "react";
import { Heading, Box, Flex, Button, Text, Image, SimpleGrid, useToast, IconButton, Badge, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';


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
  const [cart, setCart] = useState([]); // 管理购物车的状态
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure(); // 控制购物车弹出层的打开与关闭


  // 添加到购物车
  const addToCart = (dish) => {
    setCart((cart) => {
      if(cart.find((item) => item.title === dish.title)){
        return cart.map((item) => {
          if(item.title === dish.title){
            return {...item, quantity: item.quantity + 1};
          }
          return item;
        });
      }
      else{
        return [...cart, {...dish, quantity: 1}];
      }
    }); // 将菜品加入购物车
    toast({
      title: `${dish.title} 已加入购物车`,
      description: `价格: ${dish.price}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  // 获取购物车内的总数量
  const getCartItemCount = () => cart.length;
console.log(cart);
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * Number(item.price.slice(1)), 0).toFixed(2);
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
                onClick={() => addToCart(dish)} // 点击添加到购物车
              >
                Add to cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* 购物车按钮 */}
      <Button
       leftIcon={<FaShoppingCart />}
        position="fixed"
        bottom="20px"
        right="20px"
        bg="#495E57"
        color="white"
        _hover={{ bg: "#EE9972", color: "black" }}
        size="lg"
        onClick={onOpen} // 点击打开购物车弹出层
      >
        Cart
         {getCartItemCount() > 0 && (
        <Badge colorScheme="red" fontSize="0.8em" position="absolute" top="-5px" right="-5px">
          {getCartItemCount()}
          </Badge>)}
      </Button>

      {/* 购物车弹出层 */}
      <Drawer isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Cart</DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <Text>Shopping cart is empty</Text>
            ) : (
              <SimpleGrid columns={1} spacing={4}>
                {cart.map((dish, index) => (
                  <Box key={index} p="4" border="1px" borderColor="gray.300" borderRadius="md">
                    <Text fontSize="xl">{dish.title}</Text>
                    <Text>{dish.price}</Text>
                    <Text>Quantity: {dish.quantity}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </DrawerBody>
          <DrawerFooter>
          <Text fontSize="lg" fontWeight="bold" mr="8">
          Total: $ {getTotalPrice()}
        </Text>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button bg="#495E57"
        color="white"
        _hover={{ bg: "#EE9972", color: "black" }}>Go to checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </Flex>
  );
}

export default OrderOnline;