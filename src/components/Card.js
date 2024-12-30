import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, price }) => {
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
                        <HStack><Text color="#333333">Order a delivery</Text><FontAwesomeIcon icon={faBicycle} size="1x" color="black" /></HStack>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default Card;
