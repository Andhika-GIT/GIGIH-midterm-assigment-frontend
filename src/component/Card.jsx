import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Stack,
  Image,
  Circle,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ video, type, product }) => {
  const [liked, setLiked] = useState(false);

  const IMAGE =
    "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  let content = "";

  if (type === "video") {
    content = (
      <Center py={6}>
        <Box
          w="xs"
          rounded={"sm"}
          my={5}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
          boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
          position="relative"
        >
          <Box
            bg="white"
            display={"flex"}
            px={2}
            py={1}
            color="white"
            mb={2}
            gap={2}
            alignItems="center"
            justifyContent="center"
            w="max-content"
            position="absolute"
            top={2}
            right={2}
          >
            <Circle size="10px" bg="red.500" />
            <Text fontSize={"xs"} fontWeight="medium" color="red.500">
              Live
            </Text>
          </Box>
          <Box h={"200px"} borderBottom={"1px"} borderColor="black">
            <Img
              src={video.imageURL}
              roundedTop={"sm"}
              objectFit="cover"
              h="full"
              w="full"
              alt={"Blog Image"}
            />
          </Box>

          <Box p={4}>
            <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
              {video.title}
            </Heading>
            <Text color={"gray.500"} noOfLines={2}>
              {video.description}
            </Text>
          </Box>
          <Link to={`/video/${video._id}`}>
            <HStack borderTop={"1px"} color="black">
              <Flex
                p={4}
                alignItems="center"
                justifyContent={"space-between"}
                roundedBottom={"sm"}
                cursor={"pointer"}
                w="full"
              >
                <Text fontSize={"md"} fontWeight={"semibold"}>
                  View more
                </Text>
                <BsArrowUpRight />
              </Flex>
            </HStack>
          </Link>
        </Box>
      </Center>
    );
  } else if (type === "product") {
    content = (
      <Center py={12}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="xl"
          position="relative"
        >
          <Image
            src={product.imageURL}
            alt={`Picture of ${product.title}`}
            roundedTop="lg"
            h="full"
          />

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignItems="center">
              <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {product.title}
              </Box>
              <Text fontSize="md" fontWeight={400}>
                Rp. {product.price}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Center>
    );
  }
  return <>{content}</>;
};

export default Card;
