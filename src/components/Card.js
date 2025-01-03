import { Heading, HStack, Image, Text, VStack, Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { addToCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const Card = ({ title, description, imageSrc, price, dish }) => {
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
        <Box bg="#EDEFEE" borderRadius="md" borderTopRadius="xl"  // 只设置上面圆角
            borderBottomRadius="none">
            <VStack align="start">
                <Image src={imageSrc} alt="Placeholder Image" height="200px" w="full"
                    objectFit="cover"
                    borderTopRadius="xl"  // 只设置上面圆角
                    borderBottomRadius="none"
                />
                <Box m="4">
                    <VStack spacing="4" justify="space-between" align="start">
                        <HStack justify="space-between" w="full">
                            <Heading as="h2" size='md' color="black">{title}</Heading>
                            <Text color="#EE9972">{price}</Text>
                        </HStack>
                        <Text color="#495e57">{description}</Text>
                        <Button
                            bg="#F4CE14"
                            color="black"
                            size="sm"
                            onClick={() => handleAddToCart(dish)} // 点击添加到购物车
                        >
                            Add to cart
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default Card;
