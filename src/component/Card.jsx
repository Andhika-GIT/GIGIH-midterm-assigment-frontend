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
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ video, type }) => {
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
        >
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
            <Box
              bg="black"
              display={"inline-block"}
              px={2}
              py={1}
              color="white"
              mb={2}
            >
              <Text fontSize={"xs"} fontWeight="medium">
                Live
              </Text>
            </Box>
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
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              Brand
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Nice Chair, pink
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                $57
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                $199
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
  return <>{content}</>;
};

export default Card;
