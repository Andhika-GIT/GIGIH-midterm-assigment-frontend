import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <Flex p={50} h="full" w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        rounded="lg"
        shadow="xl"
        py={3}
        px={10}
      >
        <Flex justifyContent={"center"} alignItems="center" gap={2}>
          <BeatLoader color="#36d7b7" size={20} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Loading;
