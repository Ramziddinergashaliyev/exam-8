import React, { useState } from "react";
import "./comment.scss";
import { COMMENT } from "../../static";
import { PiStarFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";

const Comment = () => {
  const [show, setShow] = useState(null);

  const commentData = COMMENT?.map((el) => (
    <div key={el?.id} className="comment__bottom__card">
      <div className="comment__bottom__card__top">
        <div className="comment__bottom__card__top__star">
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
        </div>
        <button
          className="comment__bottom__card__menu"
          onClick={() =>
            setShow((prevId) => (prevId === el?.id ? null : el?.id))
          }
        >
          <CiMenuKebab />
        </button>
        {show === el?.id && (
          <div className="comment__bottom__card__modal">
            <button>delete</button>
            <button>edit</button>
          </div>
        )}
      </div>
      <div className="comment__bottom__card__info">
        <h3 className="comment__bottom__card__info-title">
          {el?.name}
          <FaRegCheckCircle />
        </h3>
        <p className="comment__bottom__card__info-text">{el?.title}</p>
        <p className="comment__bottom__card__info-desc">{el?.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="comment">
      <ul className="comment__top">
        <li className="comment__top__item">Product Details</li>
        <li className="comment__top__item">Rating & Reviews</li>
        <li className="comment__top__item">FAQs</li>
      </ul>
      <div className="comment__bottom">{commentData}</div>
      <button className="comment__bottom__btns">Load More Reviews</button>
    </div>
  );
};

export default Comment;
