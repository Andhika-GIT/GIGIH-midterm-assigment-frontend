import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

// SWIPER
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductList = ({ products }) => {
  return (
    <>
      <Center>
        <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
          Products
        </Heading>
      </Center>

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
            spaceBetween: 10,
          },
        }}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide key={product._id}>
              <Card type="product" product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductList;
