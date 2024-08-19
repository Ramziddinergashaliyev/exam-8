import React, { memo } from "react";
import "./singleLoading.scss";

const SingleLoading = () => {
  return (
    <div className="">
      <div className="singleLoading">
        <div className="singleLoading__img bg__anim"></div>
        <div className="singleLoading__info">
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
          <div className="singleLoading__title bg__anim"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(SingleLoading);
