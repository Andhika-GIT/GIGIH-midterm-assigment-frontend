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
  AspectRatio,
  VStack,
  Flex,
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
import {
  AddComment,
  Comment,
  ProductList,
  EmptyProduct,
  Loading,
} from "../component";

import ReactPlayer from "react-player/youtube";

const VideoDetail = () => {
  const [video, setVideo] = useState("");
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const { videoId } = useParams();

  // get single video data
  const fetchvideoData = async () => {
    const response = await getVideoDetail(videoId);

    setVideo(response.data.data);
  };

  // get products based on videoId
  const fetchProductsData = async () => {
    const response = await getProduct(videoId);

    console.log(response.data.data);
    setProducts(response.data.data);
  };

  // get comments based on videoId
  const fetchCommentsData = async () => {
    const response = await getComment(videoId);

    setComments(response.data.data);
  };

  useEffect(() => {
    setIsLoading(true);

    fetchvideoData();
    fetchProductsData();
    fetchCommentsData();

    setIsLoading(false);
  }, []);

  // when comment submit
  const submitComment = async (data) => {
    setIsCommentLoading(true);
    const response = await createComment(videoId, data);

    if (response.status === 200) {
      await fetchCommentsData();
    }

    setIsCommentLoading(false);
  };

  if (isLoading) return <Loading />;

  return (
    <Box mb={20}>
      <Center d="flex" flexDirection={"column"} gap={50}>
        <Card w={"full"}>
          <CardBody>
            <ReactPlayer
              url={video.videoURL}
              width="full"
              controls="true"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            />
            <Stack mt="6" spacing="3" mb="3">
              <Heading size="md">{video.title}</Heading>
              <Text>{video.description}</Text>
            </Stack>
            <Divider mb="10" />
            {products.length > 0 ? (
              <ProductList products={products} />
            ) : (
              <EmptyProduct />
            )}
          </CardBody>
        </Card>
        <AddComment onAddComment={submitComment} loading={isCommentLoading} />

        <Card w="full">
          <CardHeader>
            <Heading size="md">Comments</Heading>
          </CardHeader>
          <CardBody>
            {isCommentLoading ? (
              <Loading />
            ) : (
              <Stack divider={<StackDivider />} spacing="4">
                {comments.map((comment) => {
                  return <Comment key={comment._id} comment={comment} />;
                })}
              </Stack>
            )}
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};

export default VideoDetail;
