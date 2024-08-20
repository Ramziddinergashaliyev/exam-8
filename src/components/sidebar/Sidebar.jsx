import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import img1 from "../../assets/icons/Logo.svg";
import img2 from "../../assets/icons/img-1.svg";
import img3 from "../../assets/icons/img-2.svg";
import img4 from "../../assets/icons/img-3.svg";
import img5 from "../../assets/icons/img-4.svg";
import img6 from "../../assets/icons/img-5.svg";
import img7 from "../../assets/icons/Vector.svg";
import out from "../../assets/icons/out.svg";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <section className="sidebar">
      <div className="sidebar__top">
        <button>R</button>
        <h1>Ramziddin</h1>
      </div>
      <ul className="sidebar__item">
        <div>
          <li className="sidebar__list">
            <NavLink to={"createProduct"} className={"sidebar__left__text"}>
              <MdOutlineCreateNewFolder />
              create products
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"manageProduct"} className={"sidebar__left__text"}>
              <RiProductHuntLine />
              manage products
            </NavLink>
          </li>
        </div>
        <div className="sidebar__btns">
          <div className="sidebar__btns__title" onClick={handleLogout}>
            <img src={out} alt="" />
            <p>Login out</p>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default Sidebar;
