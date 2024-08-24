import React, { useState, useEffect } from "react";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import "./detail.scss";
import Comment from "../../components/comment/Comment";
import Products from "../../components/products/Products";
import SingleLoading from "../../components/singleLoading/SingleLoading";
import { BsCart2 } from "react-icons/bs";
import { addToCart } from "../../context/slices/cartSlice";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { toggleHeart } from "../../context/slices/wishlistSlice";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const { data: product, isLoading } = useGetProductsQuery({ limit: 4 });
  const [img, setImg] = useState(0);
  console.log(data?.payload);
  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const wishlist = useSelector((state) => state.wishlist.value);

  return (
    <div className="single container">
      {!isLoading ? (
        <div className="single__top">
          <div className="single__left">
            <div className="single__left__small">
              {data?.payload?.urls?.map((el, inx) => (
                <img onClick={() => setImg(inx)} key={el?.id} src={el} alt="" />
              ))}
            </div>
            <div className="single__left__large">
              <img
                src={data?.payload?.urls?.[img]}
                alt={data?.payload?.title}
              />
            </div>
          </div>
          <div className="single__right">
            <h3 className="single__right__title">{data?.payload?.title}</h3>
            <div className="single__right__stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="single__right__price">
              <h1 className="single__right__price">${data?.payload?.price}</h1>
              {data?.payload?.oldPrice < data?.payload?.price ? (
                <h1 className="products__card__price-old">
                  ${data?.payload?.oldPrice}
                </h1>
              ) : (
                ""
              )}
            </div>
            <p className="single__right__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              distinctio culpa dolore inventore nihil ad, eligendi voluptates
              impedit consequatur sapiente nisi molestias ea quod esse iure, eos
              reprehenderit totam. Assumenda.
            </p>
            <div className="single__right__colors">
              <p>Select Colors</p>
              <div className="single__right__color">
                <span className="single__right__color-one"></span>
                <span className="single__right__color-two"></span>
                <span className="single__right__color-three"></span>
              </div>
            </div>
            <div className="single__right__size">
              <p>Choose Size</p>
              <div className="single__right__size__btns">
                <button>Small</button>
                <button>Medium</button>
                <button>Large</button>
                <button>X-Large</button>
              </div>
            </div>
            <div className="single__right__btns">
              <button
                onClick={() => dispatch(toggleHeart(product))}
                className="single__right__btns-heart"
              >
                {wishlist?.some((list) => list._id === product._id) ? (
                  <FaHeart color="white" />
                ) : (
                  <IoIosHeartEmpty color="white" />
                )}
                Add to Heart
              </button>

              <button
                onClick={() => dispatch(addToCart(product))}
                className="single__right__btns-cart"
              >
                {cart?.some((list) => list._id === product._id) ? (
                  <BsFillCartFill color="white" />
                ) : (
                  <BsCart2 color="white" />
                )}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SingleLoading />
      )}
      <Comment />
      <div className="single__cards">
        <h2 className="single__cards__title">You might also like</h2>
        <div className="new__products">
          <Products data={product?.payload} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
