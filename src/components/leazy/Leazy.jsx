import React from "react";
import gif from "../../assets/images/loading.gif";
import "./leazy.scss";

const Leazy = () => {
  return (
    <div className="leazy">
      <img src={gif} alt="" />
    </div>
  );
};

export default Leazy;
