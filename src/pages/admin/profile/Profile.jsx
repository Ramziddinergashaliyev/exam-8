import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { LuUserCheck } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

import "./profile.scss";
import { useGetProfileQuery } from "../../../context/api/userApi.js";

const Profile = () => {
  const { data } = useGetProfileQuery();

  let profile = data?.payload;

  return (
    <div className="profile container">
      <div className="profile__info">
        <div className="profile__info__top">
          <button className="profile__info__fullname">
            {profile?.lname?.slice(0, 1)}
            {profile?.fname?.slice(0, 1)}
          </button>
          <button className="profile__info__edit">
            <BiSolidEdit />
          </button>
        </div>
        <span>To'liq ism Familiya</span>
        <h3>
          <FaRegUser />
          {profile?.lname} {profile?.fname}
        </h3>
        <span>username</span>
        <h3>
          {" "}
          <LuUserCheck />
          {profile?.username}
        </h3>
        <span>Telefon Raqam</span>
        <h3>
          <MdOutlinePhone />
          {profile?.phone}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
