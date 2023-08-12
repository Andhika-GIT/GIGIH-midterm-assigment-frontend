import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Input,
  InputGroup,
  Stack,
  Text,
  FormControl,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";

const AddComment = ({ onAddComment, loading }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(loading);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onInputUsername = (e) => {
    setIsError(false);
    setUsername(e.target.value);
  };

  const onInputComment = (e) => {
    setIsError(false);
    setComment(e.target.value);
  };

  const submitComment = (e) => {
    e.preventDefault();
    console.log("test");

    if (username === "" || comment === "") {
      setIsError(true);
      setErrorMessage("Please fill all the input");
      return;
    }

    const data = {
      username: username,
      comment: comment,
    };

    setUsername("");
    setComment("");

    onAddComment(data);
  };

  return (
    <Card w="full" p="10">
      <Box>
        {isError && (
          <Center>
            <Text color={"red"}>{errorMessage}</Text>
          </Center>
        )}
        <form onSubmit={submitComment}>
          <FormControl>
            <Stack d="flex" flexDirection="column" gap={10} mb="10">
              <Input
                variant="flushed"
                placeholder="Your username"
                onChange={(e) => onInputUsername(e)}
              />

              <Input
                variant="flushed"
                placeholder="Add comment"
                onChange={(e) => onInputComment(e)}
              />
            </Stack>
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
              type="submit"
              disabled={loading}
            >
              <Flex align="center" justify="center" gap={2}>
                <Text>Add</Text>
                <AddIcon />
              </Flex>
            </Button>
          </FormControl>
        </form>
      </Box>
    </Card>
  );
};

export default AddComment;
