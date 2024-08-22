import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../../assets/images/logo.png";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./header.scss";
import Search from "../../search/Search";
import { NavLink } from "react-router-dom";

const Header = () => {
  let { pathname } = useLocation();
  if (
    pathname.includes("admin") ||
    pathname.includes("login") ||
    pathname.includes("register")
  ) {
    return <></>;
  }
  const [close, setClose] = useState(true);
  const [show, setShow] = useState(false);

  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  return (
    <>
      {close ? (
        <div className="header__top">
          <div className="header__top__info container">
            <div></div>
            <div className="header__top__info__desc">
              <p>
                Sign up and get 20% off to your first order.{" "}
                <span>Sign Up Now</span>
              </p>
            </div>
            <button
              onClick={() => setClose(false)}
              className="header__top__close"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <header className="header">
        <nav className="header__nav container">
          <div className="header__nav__logo">
            <button
              onClick={() => setShow(true)}
              className="header__nav__logo-menu"
            >
              <RxHamburgerMenu />
            </button>
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <ul className={`header__nav__link ${show ? "header__show" : ""}`}>
            <li onClick={() => setShow(false)} className="header__nav__close">
              <IoCloseSharp />
            </li>
            <li className="header__nav__item">
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink to={"/new"}>New Arrivals</NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink to={"/brands"}>Brands</NavLink>
            </li>
          </ul>
          <div className="header__nav__form">
            <Search />
          </div>
          <div className="header__nav__btns">
            <div className="header__nav__btns-search">
              <IoSearchOutline />
            </div>
            <NavLink className={"header__nav__btns__link"} to={"/wishlist"}>
              <div className={"header__nav__btns__links"}>
                <IoIosHeartEmpty />
                <sup>{wishlist?.length}</sup>
              </div>
            </NavLink>
            <NavLink to={"/cart"}>
              <div className={"header__nav__btns__links"}>
                <BsCart2 />
                <sup>{cart?.length}</sup>
              </div>
            </NavLink>
            <NavLink to={"/login"}>
              <VscAccount />
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
