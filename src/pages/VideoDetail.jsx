import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";

// utils
import {
  createComment,
  getComment,
  getProduct,
  getVideoDetail,
} from "../utils";

// SWIPER
import "swiper/css";
import "swiper/css/navigation";

// COMPONENTS
import { AddComment, Comment, Error, Loading, ProductList } from "../component";

import ReactPlayer from "react-player/youtube";

const VideoDetail = () => {
  const [video, setVideo] = useState("");
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { videoId } = useParams();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const responseVideo = await getVideoDetail(videoId);
      const responseProduct = await getProduct(videoId);
      const responseComment = await getComment(videoId);

      setVideo(responseVideo.data.data);
      setProducts(responseProduct.data.data);
      setComments(responseComment.data.data);
    } catch (err) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
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

  if (isError) {
    return (
      <Error message="Something wrong, to go back to home page and try again" />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

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
              <Error message="This shop has no product" />
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
