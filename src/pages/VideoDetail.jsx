import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";

// utils
import {
  getComment,
  getProduct,
  getVideoDetail,
  createComment,
} from "../utils";

// SWIPER
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// COMPONENTS
import { AddComment, Card as ProductCard, Comment } from "../component";

const VideoDetail = () => {
  const [video, setVideo] = useState("");
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { videoId } = useParams();

  // get single video data
  const fetchvideoData = async () => {
    const response = await getVideoDetail(videoId);

    setVideo(response.data.data);
  };

  // get products based on videoId
  const fetchProductsData = async () => {
    const response = await getProduct(videoId);
  };

  // get comments based on videoId
  const fetchCommentsData = async () => {
    const response = await getComment(videoId);

    setComments(response.data.data);
  };

  useEffect(() => {
    fetchvideoData();
    // fetchProductsData();
    fetchCommentsData();
  }, []);

  // when comment submit
  const submitComment = async (data) => {
    setIsLoading(true);
    const response = await createComment(videoId, data);

    if (response.status === 200) {
      await fetchCommentsData();
      setIsLoading(false);
    }
    console.log(response);
  };

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
        <AddComment onAddComment={submitComment} loading={isLoading} />

        <Card w="full">
          <CardHeader>
            <Heading size="md">Comments</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {comments.map((comment, index) => {
                return <Comment key={comment._id} comment={comment} />;
              })}
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};

export default VideoDetail;
