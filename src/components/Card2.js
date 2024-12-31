import { Box, VStack, HStack, Image, Avatar, Text } from "@chakra-ui/react";
import Rating from "../Widgets/Rating";
import { useState } from "react";

function Card2({ name, pesonalphoto, rating, foodphoto, foodname, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Box borderRadius={8} bg="white">
      <VStack p={4} justify={"start"} align={"start"}>
        <HStack>
          <Avatar size="xs" name={name} src={pesonalphoto} />
          <Text color="#333333" fontSize="10px">{name}</Text>
          <Rating score={rating} />
        </HStack>
        <HStack justify={"flex-start"} spacing={6}>
          <Image src={foodphoto} alt="Placeholder Image" width="80px" borderRadius={2} />
          <Text color="#333333">{foodname}</Text>
        </HStack>
        <Text
          color="#495E57"
          border="none"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: isExpanded ? 'none' : 3,
          }}
        >{content}
        </Text>
        {!isExpanded && (
        <button onClick={handleToggle}>
          ...more
        </button>
      )}
      </VStack>
    </Box>
  )
}

export default Card2;