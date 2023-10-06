import React from "react";
import { useNavigate } from "react-router-dom";

import "./wrapper.css"

const Wrapper = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="footer">
        <div className="topNav">
          <ul className="topNavUl">
            <li>social</li>
            <li>search</li>
            <li>push</li>
            <li>music</li>
            <li>user</li>
          </ul>
        </div>
      </div>
      <div className="leftNav">
        <ul>
          <li><button onClick={() => navigate("/user")} type="button">Моя страница</button></li>
          <li><button onClick={() => navigate("/feed")} type="button">Новости</button></li>
          <li><a href="#">Мессенджер</a></li>
          <li><a href="#">Друзья</a></li>
          <li><a href="#">Сообщества</a></li>
          <li><a href="#">Фотографии</a></li>
          <li><a href="#">Музыка</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Wrapper;