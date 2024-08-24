import React, { memo } from "react";
import "./singleLoading.scss";

const SingleLoading = () => {
  return (
    <div className="">
      <div className="singleLoading">
        <div className="singleLoading__card">
          <div className="singleLoading__card-imgs">
            <img className="bg__anim" src="" alt="" />
            <img className="bg__anim" src="" alt="" />
            <img className="bg__anim" src="" alt="" />
          </div>
          <div className="singleLoading__img bg__anim"></div>
        </div>
        <div className="singleLoading__info">
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title-four bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__info-btns">
            <div className="singleLoading__title bg__anim"></div>
            <div className="singleLoading__title bg__anim"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SingleLoading);
