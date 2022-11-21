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
                "https://images.unsplash.com/photo-1536383794906-773f6a5210be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              }
              make="Audi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://images.unsplash.com/photo-1536383794906-773f6a5210be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              }
              make="Audi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://images.unsplash.com/photo-1536383794906-773f6a5210be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              }
              make="Audi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://images.unsplash.com/photo-1536383794906-773f6a5210be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              }
              make="Audi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={
                "https://images.unsplash.com/photo-1536383794906-773f6a5210be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
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
