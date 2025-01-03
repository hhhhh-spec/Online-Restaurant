import React from "react";
import { Box, Button, Text, SimpleGrid, Badge, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';


export function Cart(props) {
    const { isOpen, onOpen, onClose } = useDisclosure(); // 控制购物车弹出层的打开与关闭
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items); // 从 Redux store 中读取数据,获取购物车商品
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.quantity * Number(item.price.slice(1)), 0).toFixed(2);
    };

    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    return (
        <>
            {/* 购物车按钮 */}
            {props.dir===true ? (<IconButton icon={<FaShoppingCart />} color="#495E57"  size="lg"
                onClick={onOpen}/>)
            : (
                <Button
                leftIcon={<FaShoppingCart />}
                position="fixed"  // 判断是否传递了 position
                bottom="20px"  // 如果有传递 position，则使用 bottom 和 right
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
            )}
           

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
                                        <Text>Quantity:
                                            <Button onClick={() => dispatch(addToCart(dish))} size="xs" m="1">+</Button>
                                            {dish.quantity}
                                            <Button onClick={() => dispatch(removeFromCart(dish))} m="1" size="xs">-</Button>
                                        </Text>
                                    </Box>
                                ))}
                            </SimpleGrid>
                        )}
                    </DrawerBody>
                    <DrawerFooter>
                        <Text fontSize="lg" fontWeight="bold" mr="8">
                            Total: $ {calculateTotal()}
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
        </>
    );
}