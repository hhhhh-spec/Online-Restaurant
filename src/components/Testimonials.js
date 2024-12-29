import React from "react";
import { HStack, VStack, Box, Button, Heading } from "@chakra-ui/react";
import Card2 from "./Card2";

const comments = [
    {
        name: "Dan Abrahmov",
        getPho: () => require("../images/restaurant chef B.jpg"),
        rating: 4.5,
        foodPho: () => require("../images/lemon dessert.jpg"),
        foodname: "Salad",
        content: "This salad is amazing! Fresh lettuce with sour vinegar has a refreshing taste, and I can taste the taste of nature in every bite. I highly recommend it to people who love healthy food."
    },
    {
        name: "Emily Johnson",
        getPho: () => require("../images/Mario and Adrian A.jpg"),
        rating: 4.8,
        foodPho: () => require("../images/lemon dessert.jpg"),
        foodname: "Grilled Chicken",
        content: "The grilled chicken is perfectly seasoned and juicy. Every bite is a burst of flavor, complemented by a smoky aroma. Absolutely delightful for dinner!"
    },
    {
        name: "Michael Smith",
        getPho: () => require("../images/restauranfood.jpg"),
        rating: 4.2,
        foodPho: () => require("../images/greek salad.jpg"),
        foodname: "Creamy Alfredo Pasta",
        content: "Rich and creamy Alfredo sauce coats the pasta beautifully. It's a comforting and indulgent dish, perfect for pasta lovers. Highly satisfying!"
    },
    {
        name: "Sophia Davis",
        getPho: () => require("../images/restaurant.jpg"),
        rating: 4.7,
        foodPho: () => require("../images/lemon dessert.jpg"),
        foodname: "Vegan Buddha Bowl",
        content: "This vegan bowl is a feast of colors and flavors! The combination of fresh vegetables, quinoa, and a tangy dressing is both healthy and delicious."
    },
    {
        name: "James Wilson",
        getPho: () => require("../images/restaurant chef B.jpg"),
        rating: 4.3,
        foodPho: () => require("../images/greek salad.jpg"),
        foodname: "Mixed Berry Tart",
        content: "The tart crust is buttery and crisp, and the mixed berries are fresh and sweet. A delightful dessert that's not overly heavy."
    },
]

function Testimonials() {
    return (
        <Box bg="#EDEFEE">
                    <VStack p={4} justify={"center"} align={"center"}>
                        <Heading size="lg" color="black" p={8}>Testimonials</Heading>
                        <HStack wrap="wrap" justify="center">
                                {comments.map((comment) => (
                                    <Card2
                                        key={comment.name}
                                        name={comment.name}
                                        pesonalphoto={comment.getPho()}
                                        rating={comment.rating}
                                        foodphoto={comment.foodPho()}
                                        foodname={comment.foodname}
                                        content={comment.content}
                                    />
                                ))}
                        </HStack>
                    </VStack>
        </Box>
    );
}

export default Testimonials;