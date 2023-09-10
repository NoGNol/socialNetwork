import React from "react";

import "./wrapper.css"

const Wrapper = () => {


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
          <li>Моя страница</li>
          <li>Новости</li>
          <li>Мессенджер</li>
          <li>Друзья</li>
          <li>Сообщества</li>
          <li>Фотографии</li>
          <li>Музыка</li>
        </ul>
      </div>
    </div>
  )
}

export default Wrapper;