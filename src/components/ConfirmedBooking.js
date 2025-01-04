import { useLocation } from "react-router-dom";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function ConfirmedBooking() {
    const location = useLocation();
    const bookingData = location.state; // 获取传递的表单数据
    return (
        <VStack w="100vw" p={16} alignItems="flex-start" px="20vw" color="#495E57">
            <Heading as="h1">Booking Confirmed!</Heading>
            <Text pb="4">Thank you for booking with us. We look forward to seeing you soon.</Text>
            <Box  rounded="md" w="100%" bg="#FBDABB">
                <VStack alignItems="flex-start" spacing={4} p={6}>
                <Heading as="h2" size="md">Booking Details</Heading>
                <Text>Date: {bookingData.resdate}</Text>
                <Text>Time: {bookingData.restime}</Text>
                <Text>Guests: {bookingData.guests}</Text>
                <Text>Occasion: {bookingData.occasion}</Text>
                </VStack>
            </Box>
        </VStack>
    );
}

export default ConfirmedBooking;