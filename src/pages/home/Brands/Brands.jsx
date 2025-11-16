import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import star_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brands = [
    amazon,
    amazon_vector,
    casio,
    moonstar,
    randstad,
    star,
    star_people,
  ];

  return (
    <div className="mt-20 mb-5 text-secondary">
      <h2 className="text-center  text-2xl font-bold mb-10 text-secondary ">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        freeMode={true}
        loop={true}
        loopedSlides={brands.length}
        speed={5000}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
