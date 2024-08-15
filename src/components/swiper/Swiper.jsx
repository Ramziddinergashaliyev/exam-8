import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./customer.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles

import { Pagination, Navigation } from "swiper/modules";

export default function SwiperComp() {
  const data = [
    {
      id: 1,
      title: "Sarah M.",
    },
    { id: 2, title: "Alex K." },
    { id: 3, title: "James L." },
    {
      id: 4,
      title: "Sarah M.",
    },
    {
      id: 5,
      title: "Alex K.",
    },
    {
      id: 6,
      title: "James L.",
    },
  ];

  const swiperItem = data?.map((el) => (
    <SwiperSlide className="swiper__card" key={el.id}>
      <div className="swiper__stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="swiper__info">
        <h3 className="swiper__name">{el?.title}</h3>
        <div className="swiper__icon">
          <FaCheck />
        </div>
      </div>
      <p className="swiper__desc">
        "Finding clothes that align with my personal style used to be a
        challenge until I discovered Shop.co. The range of options they offer is
        truly remarkable, catering to a variety of tastes and occasions.”
      </p>
    </SwiperSlide>
  ));
  return (
    <div className="swiper container">
      <div className="customer__top">
        <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperItem}
      </Swiper>
    </div>
  );
}
