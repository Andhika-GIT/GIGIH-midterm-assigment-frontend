import React, { useState, useEffect } from "react";

import { Wrap, WrapItem, Heading, Text, Center } from "@chakra-ui/react";

// utils
import { getVideos } from "../utils";
import { Card } from "../component";

const Home = () => {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    const response = await getVideos();
    console.log(response);

    setVideos(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Wrap spacing="20px" justify={"center"}>
        {videos.map((video, index) => {
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
