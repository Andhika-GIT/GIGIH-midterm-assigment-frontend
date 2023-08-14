import { useEffect, useState } from "react";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

// utils
import { getVideos } from "../utils";

// components
import { Card, Loading } from "../component";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await getVideos();

    setVideos(response.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(search.toLowerCase());
  });

  if (isloading) return <Loading />;
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
