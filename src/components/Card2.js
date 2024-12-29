import {Box,VStack,Heading, HStack, Textarea, Image, Avatar, Text} from "@chakra-ui/react";
import Rating from "../Widgets/Rating";


function Card2({name, pesonalphoto, rating, foodphoto, foodname, content}) {
  return (
    <Box bg="#FBDABB" borderRadius={8}>
        <VStack p={4} justify={"center"} align={"flex-start"}>
            <HStack>
                <Avatar size="xs" name={name} src={pesonalphoto} />
                <Text>{name}</Text>
            <Rating score={rating} />
            </HStack>
            <HStack justify={"flex-start"} spacing={8}>
            <Image src={foodphoto} alt="Placeholder Image" width="100px" borderRadius={2}/>
            <Heading size="md" color="black">{foodname}</Heading>
            </HStack>
            <Textarea
             sx={{
                '&::-webkit-scrollbar': {
                  width: '2px', // 设置滚动条宽度
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'gray.400', // 设置滚动条滑块颜色
                  borderRadius: '4px', // 滑块圆角
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: 'gray.600', // 鼠标悬停时的滑块颜色
                },
              }}
            >{content}</Textarea>
        </VStack>
    </Box>
  )
}

export default Card2;