import React from "react";
import "./browse.scss";

const Browse = () => {
  return (
    <section id="browse">
      <div className="container">
        <div className="browse">
          <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
          <div className="browse__cards">
            <div className="browse__card casual">
              <span>Casual</span>
            </div>
            <div className="browse__card formal">
              <span>Formal</span>
            </div>
            <div className="browse__card party">
              <span>Party</span>
            </div>
            <div className="browse__card gym">
              <span>Gym</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
