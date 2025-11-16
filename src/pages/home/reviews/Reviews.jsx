import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <>
      <div className="my-10">
        <h3 className="text-center font-bold text-2xl text-secondary">
          What our customers are sayings
        </h3>
        <p className="text-center text-gray-600 mt-3 mb-7 leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
        <div>
          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  scale: 0.95,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: "50%",
              depth: 200,
              scale: 0.75,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review}></ReviewCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Reviews;
