import React, { memo, useState } from "react";
import { IoClose } from "react-icons/io5";
import "./payme.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteAllCart } from "../../context/slices/cartSlice";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoLogoPaypal } from "react-icons/io5";
import { AiOutlineBank } from "react-icons/ai";

const BOT_TOKEN = "7177611291:AAEVLXDpqfpajh7Obmq0VWV_D0TDGoMwm5Y";
const CHAT_ID = "-1002148512889";
const USER_ID = "1431700586";

function Payme({ setPayme, cartData, total }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [number, setNumber] = useState("");
  let dispatch = useDispatch();

  const handleSendMessage = (e) => {
    e.preventDefault();

    let title = "Buyurtma:%0A";
    title += `FirstName: <b>${fname}</b>%0A`;
    title += `LastName: <b>${lname}</b>%0A%0A`;
    title += `Email: <b>${email}</b>%0A`;
    title += `Address: <b>${area}</b>%0A`;
    title += `phone Number: <b>${number}</b>%0A%0A`;

    cartData.forEach((product) => {
      title += `${product.title} %0A`;
      title += `${product.quantity}ta %0A`;
      title += `${product.price}USD %0A%0A`;
    });

    title += `TOTAL: <b>${total}</b>USD %0A`;
    setPayme(false);

    let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${title}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    dispatch(deleteAllCart());
    setPayme(false);
  };
  return (
    <div className="payme">
      <div className="payme__close">
        <FaArrowLeft onClick={() => setPayme(false)} />
        <IoClose onClick={() => setPayme(false)} />
      </div>
      <h2>Make Payment</h2>
      <form onSubmit={handleSendMessage} className="form__bot" action="">
        <div className="payme__form">
          <input
            required
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            type="text"
          />
          <input
            required
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
            type="text"
          />
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            type="text"
          />
          <textarea
            required
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Address for Delivery"
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <div className="payme__form__checkbox">
            <h4>Select Method of Payment</h4>
            <label htmlFor="1" className="payme__form__checkbox-card">
              <p>
                <FaRegCreditCard />
                Credit Card Or Debit
              </p>
              <input required name="paymet" id="1" type="radio" />
            </label>
            <label htmlFor="2" className="payme__form__checkbox-card">
              <p>
                <IoLogoPaypal />
                Paypal
              </p>
              <input required name="paymet" id="2" type="radio" />
            </label>
            <label htmlFor="3" className="payme__form__checkbox-card">
              <p>
                <AiOutlineBank />
                Bank Transfer
              </p>
              <input required name="paymet" id="3" type="radio" />
            </label>
          </div>
          <input
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Mobile Phone"
            type="text"
          />
        </div>
        <button>Go to Payment</button>
      </form>
    </div>
  );
}

export default memo(Payme);
