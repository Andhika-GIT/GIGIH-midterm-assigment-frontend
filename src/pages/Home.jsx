import React, { useState, useEffect } from "react";

import {
  Wrap,
  WrapItem,
  Heading,
  Text,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

// utils
import { getVideos } from "../utils";
import { Card } from "../component";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await getVideos();
    console.log(response);

    setVideos(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <Search2Icon />
        </InputLeftElement>
        <Input
          variant="flushed"
          placeholder="Search Product"
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      <Wrap spacing="20px" justify={"center"}>
        {filteredVideos.map((video, index) => {
          return (
            <WrapItem key={video._id}>
              <Card video={video} type="video" />
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
};

export default Home;
