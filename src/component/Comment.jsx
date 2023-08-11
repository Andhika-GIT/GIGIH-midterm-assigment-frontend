import { Box, Heading, Text } from "@chakra-ui/react";

const Comment = ({ comment }) => {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {comment.username}
      </Heading>
      <Text pt="2" fontSize="sm">
        {comment.comment}
      </Text>
    </Box>
  );
};

export default Comment;
