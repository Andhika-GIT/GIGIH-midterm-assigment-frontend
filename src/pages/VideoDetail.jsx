import { useEffect, useState } from "react";

import {
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  Box,
  Card,
  CardHeader,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { useParams } from "react-router-dom";
import { getComment, getProduct, getVideoDetail } from "../utils";

// SWIPER
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// COMPONENTS
import { Card as ProductCard } from "../component";

const VideoDetail = () => {
  const [video, setVideo] = useState("");
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const { videoId } = useParams();

  // get single video data
  const fetchvideoData = async () => {
    const response = await getVideoDetail(videoId);

    console.log(response.data.data);
    setVideo(response.data.data);
  };

  // get products based on videoId
  const fetchProductsData = async () => {
    const response = await getProduct(videoId);

    console.log(response);
  };

  // get comments based on videoId
  const fetchCommentsData = async () => {
    const response = await getComment(videoId);

    console.log(response);
  };

  useEffect(() => {
    fetchvideoData();
    fetchProductsData();
    fetchCommentsData();
  }, []);

  return (
    <Box mb={20}>
      <Center d="flex" flexDirection={"column"} gap={50}>
        <Card w={"full"}>
          <CardBody>
            <Image src={video.imageURL} borderRadius="lg" w={"full"} />
            <Stack mt="6" spacing="3" mb="3">
              <Heading size="md">{video.title}</Heading>
              <Text>{video.description}</Text>
            </Stack>
            <Divider mb="20" />
            <Swiper
              slidesPerView={1}
              spaceBetween={2}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              }}
            >
              <SwiperSlide>
                <ProductCard type="product" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard type="product" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard type="product" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard type="product" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard type="product" />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard type="product" />
              </SwiperSlide>
            </Swiper>
          </CardBody>
        </Card>
        <Card w="full">
          <CardHeader>
            <Heading size="md">Comments</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box mb={10}>
                <InputGroup mb={10}>
                  <Input variant="flushed" placeholder="Your username" />
                </InputGroup>
                <InputGroup mb={10}>
                  <Input variant="flushed" placeholder="Add comment" />
                </InputGroup>
                <Button
                  h="1.75rem"
                  size="md"
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <Flex align="center" justify="center" gap={2}>
                    <Text>Add</Text>
                    <AddIcon />
                  </Flex>
                </Button>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};

export default VideoDetail;
