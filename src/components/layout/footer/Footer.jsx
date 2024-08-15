import React from "react";
import payment from "../../../assets/images/payment.png";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../../assets/images/logo.png";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa6";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__box">
          <h2 className="footer__box__title">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="footer__box__right">
            <form action="" className="footer__form">
              <label htmlFor="">
                <MdOutlineEmail />
                <input type="text" placeholder="Enter your email address" />
              </label>
              <button>Subscribe to Newsletter</button>
            </form>
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__left">
            <img src={logo} width={160} height={25} alt="" />
            <p className="footer__desc">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="footer__icons">
              <div className="footer__icon">
                <FaTwitter />
              </div>
              <div className="footer__icon">
                <FaFacebookF />
              </div>
              <div className="footer__icon">
                <FaInstagram />
              </div>
              <div className="footer__icon">
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="footer__right">
            <ul className="footer__list">
              <li className=" footer__item__top">Company</li>
              <li className="footer__item">About</li>
              <li className="footer__item">Features</li>
              <li className="footer__item">Works</li>
              <li className="footer__item">Career</li>
            </ul>
            <ul className="footer__list">
              <li className=" footer__item__top">Help</li>
              <li className="footer__item">Customer Support</li>
              <li className="footer__item">Delivery Details</li>
              <li className="footer__item">Terms & Conditions</li>
              <li className="footer__item">Privacy Policy</li>
            </ul>
            <ul className="footer__list">
              <li className=" footer__item__top">FAQ</li>
              <li className="footer__item">Account</li>
              <li className="footer__item">Manage Deliveries</li>
              <li className="footer__item">Orders</li>
              <li className="footer__item">Payments</li>
            </ul>
            <ul className="footer__list">
              <li className=" footer__item__top">Resources</li>
              <li className="footer__item">Free eBooks</li>
              <li className="footer__item">Development Tutoria</li>
              <li className="footer__item">How to - Blog</li>
              <li className="footer__item">Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__desc">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <img src={payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
