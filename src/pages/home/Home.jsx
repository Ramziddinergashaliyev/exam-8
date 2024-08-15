import React from "react";
import Hero from "../../components/hero/Hero";
import Partner from "../../components/partner/Partner";
import NewProducts from "../../components/new-products/NewProducts";
import TopProducts from "../../components/top-products/TopProducts";
import Browse from "../../components/browse/Browse";
import SwiperComp from "../../components/swiper/Swiper";

const Home = () => {
  return (
    <>
      <Hero />
      <Partner />
      <NewProducts />
      <TopProducts />
      <Browse />
      <SwiperComp />
    </>
  );
};

export default Home;
