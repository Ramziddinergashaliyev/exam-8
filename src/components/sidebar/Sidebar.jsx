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
import { useGetProfileQuery } from "../../context/api/userApi";
import { logout } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";
import { GoDuplicate } from "react-icons/go";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetProfileQuery();
  console.log();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <section className="sidebar">
      <NavLink to={"/admin/profile"} className="sidebar__top">
        <div className="sidebar__top__btn">
          {data?.payload?.fname?.slice(0, 1)}
        </div>
        <h1>{data?.payload?.fname}</h1>
      </NavLink>
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
              <MdManageHistory />
              manage products
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"createCategory"} className={"sidebar__left__text"}>
              <GoDuplicate />
              create Category
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"manageCategory"} className={"sidebar__left__text"}>
              <HiOutlineDocumentDuplicate />
              manage Category
            </NavLink>
          </li>
        </div>
        <div className="sidebar__btns">
          <NavLink to={"/"} className="sidebar__btns__title">
            <IoHomeOutline />
            <p>Home</p>
          </NavLink>
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
