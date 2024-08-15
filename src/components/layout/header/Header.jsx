import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../../assets/images/logo.png";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

import "./header.scss";
import Search from "../../search/Search";

const Header = () => {
  const [close, setClose] = useState(true);
  const [show, setShow] = useState(false);
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
            <img src={logo} alt="" />
          </div>
          <ul className={`header__nav__link ${show ? "header__show" : ""}`}>
            <li onClick={() => setShow(false)} className="header__nav__close">
              <IoCloseSharp />
            </li>
            <li className="header__nav__item">Shop</li>
            <li className="header__nav__item">On Sale</li>
            <li className="header__nav__item">New Arrivals</li>
            <li className="header__nav__item">Brands</li>
          </ul>
          <div className="header__nav__form">
            <Search />
          </div>
          <div className="header__nav__btns">
            <div className="header__nav__btns-search">
              <IoSearchOutline />
            </div>
            <BsCart2 />
            <VscAccount />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
