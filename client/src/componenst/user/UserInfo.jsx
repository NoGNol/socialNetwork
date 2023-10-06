import React from "react";
import jwtDecode from "jwt-decode";

const UserInfo = () => {
  const token = localStorage.getItem("token");
  const decodeToken = jwtDecode(token);
  console.log(decodeToken);
  const { name, surname } = decodeToken;

  return (
    <div className="user-info">
      <img src="" alt="" className="user-img" />
      <span className="user-name">{name}</span>
      <span className="user-surname">{surname}</span>
    </div>
  );
};

export default UserInfo;
