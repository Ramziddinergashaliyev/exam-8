import React, { useEffect } from "react";
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

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  console.log(cart);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const cartData = cart?.map((el) => (
    <div className="cart__items__left-card">
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
              disabled={el?.quantity <= 0}
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
      {cart.length > 0 ? (
        <div className="cart container">
          <h2>Your cart</h2>
          <div className="cart__items">
            <div className="cart__items__left">{cartData}</div>
            <div className="cart__items__right">
              <h2>Order Summary</h2>
              <div className="cart__items__right__items">
                <p>Subtotal</p>
                <span>$565</span>
              </div>
              <div className="cart__items__right__items">
                <p>Discount (-20%)</p>
                <span>$113</span>
              </div>
              <div className="cart__items__right__items">
                <p>Delivery Fee</p>
                <span>$15</span>
              </div>
              <div className="cart__items__right__items">
                <p>Total</p>
                <span>$467</span>
              </div>
              <div className="cart__items__right__items-form">
                <input placeholder="Add promo code" type="text" />
                <button>Apply</button>
              </div>
              <button className="cart__items__right__btns">
                Go to Checkout
                <FaArrowRight />
              </button>
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
