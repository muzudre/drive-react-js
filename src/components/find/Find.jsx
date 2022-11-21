import React from "react";
import styles from "./Find.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h2>Find your drive</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            340: {
              width: 200,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card
              image={
                "https://www.freeiconspng.com/uploads/land-rover-range-rover-car-png-25.png"
              }
              make="Rand Rover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://www.freeiconspng.com/uploads/audi-jeep-q3-car-png-7.png"
              }
              make="Audi Jeep"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://www.freeiconspng.com/uploads/volkswagen-car-png-image-7.png"
              }
              make="Volkswagen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://www.freeiconspng.com/uploads/red-hyundai-car-png-15.png"
              }
              make="Red Hyundai"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={"https://www.freeiconspng.com/uploads/car-png-27.png"}
              make="Audi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://www.freeiconspng.com/uploads/black-cool-bmw-car-png-19.png"
              }
              make="BMW"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://www.freeiconspng.com/uploads/yellow-car-png-26.png"
              }
              make="Audi"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
