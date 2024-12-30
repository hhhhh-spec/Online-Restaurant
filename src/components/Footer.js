import ResponsiveGrid from "./ResponsiveGrid";
import { Heading, Grid, Image, VStack, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import React from 'react';

function footer() {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <ResponsiveGrid bgColor="#EDEFEE" padding="10">
            <Grid
                templateColumns=
                {{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                }}
                gap={8}
                fontSize="12px"
            >
                <Image src={require("../images/Logo.png")} />
                <VStack justify="flex-start" align="flex-start">
                    <Heading size="xs" color="#495E57">Bottom Navigation</Heading>
                    <Link to="/">Home</Link>
                    <a href="#about" onClick={handleClick("about")}>About</a>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/order-online">Order Online</Link>
                    <Link to="/login">Login</Link>
                </VStack>
                <VStack justify="flex-start" align="flex-start">
                    <Heading size="xs" color="#495E57">Contact</Heading>
                    <Text>Address</Text>
                    <Text>Phone number</Text>
                    <Text>Email</Text>
                </VStack>
                <VStack justify="flex-start" align="flex-start">
                    <Heading size="sm" color="#495E57">Social Media Links</Heading>
                    <Text>Address</Text>
                    <Text>Phone number</Text>
                    <Text>Email</Text>
                </VStack>
            </Grid>
        </ResponsiveGrid>
    );
}

export default footer;