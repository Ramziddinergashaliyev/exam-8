import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import "./cart.scss";
import {
  decrementCart,
  deleteAllCart,
  incrementCart,
  removeFromCart,
} from "../../context/slices/cartSlice";
import CartEmpty from "../../components/cart-Empty/CartEmpty";
import Module from "../../components/module/Module";
import Payme from "../../components/payme/Payme";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [payme, setPayme] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const cartData = cart?.map((el) => (
    <div className="cart__items__left-card" key={el._id}>
      <div className="cart__items__left-card-img">
        <img src={el?.urls?.[0]} alt="" />
      </div>
      <div className="cart__items__left-card-info">
        <div className="cart__items__left-card-info__title">
          <p>{el?.title}</p>
          <button onClick={() => dispatch(removeFromCart(el?._id))}>
            <RiDeleteBin5Fill />
          </button>
        </div>
        <div>
          <p className="cart__items__left-card-info-size">
            <span>size:</span> large
          </p>
          <p className="cart__items__left-card-info-size">
            <span>color: </span>white
          </p>
        </div>
        <div className="cart__items__left-card-info__price">
          <p>${el?.price}</p>
          <div className="cart__items__left-card-info-btns">
            <button
              disabled={el?.quantity <= 1}
              onClick={() => dispatch(decrementCart(el))}
            >
              -
            </button>
            <button>{el?.quantity}</button>
            <button onClick={() => dispatch(incrementCart(el))}>+</button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {payme ? (
        <Module width={"800px"} close={setPayme} bg={"#aaa9"}>
          <Payme setPayme={setPayme} cartData={cart} total={subtotal} />
        </Module>
      ) : (
        <></>
      )}
      {cart.length > 0 ? (
        <div className="cart container">
          <h2>Your cart</h2>
          <div className="cart__items">
            <div className="cart__items__left">{cartData}</div>
            <div className="cart__items__right">
              <h2>Order Summary</h2>
              <div className="cart__items__right__items">
                <p>Subtotal</p>
                <span>
                  <p>${subtotal.toFixed(2)}</p>
                </span>
              </div>
              <div className="cart__items__right__items">
                <p>Discount (-20%)</p>
                <span>${subtotal * 0.2}</span>
              </div>
              <div className="cart__items__right__items">
                <p>Delivery Fee</p>
                <span>$15</span>
              </div>
              <div className="cart__items__right__items">
                <p>Total</p>
                <span>${(subtotal + 15 - subtotal * 0.2).toFixed(2)}</span>{" "}
              </div>
              <div className="cart__items__right__items-form">
                <input placeholder="Add promo code" type="text" />
                <button>Apply</button>
              </div>
              <NavLink
                onClick={() => setPayme(true)}
                className="cart__items__right__btns"
              >
                Go to Checkout
                <FaArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default Cart;
