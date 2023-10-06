import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Authorization.css";
import login from "../login";
import register from "../register";

const Authorization = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(null);
  const [userWithToken, setUserWithToken] = useState(null);

  const navigate = useNavigate();

  const user = {
    email,
    password,
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login(user);
    if (!result.token) {
      setStatus("Ошибка Авторизации");
      return;
    }
    setUserWithToken({
      ...user,
      token: result.token,
    });
    localStorage.setItem("token", result.token);
    setStatus("Успешная Авторизация");
    navigate("/feed");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log('asd');
    const result = await register(user);
    if (!result.token) {
      setStatus("Ошибка Регистрации");
      return;
    }
    setUserWithToken({
      ...user,
      token: result.token,
    });
    localStorage.setItem("token", result.token);
    setStatus("Успешная Регистрация");
    navigate("/feed");
  };

  return (
    <div className="containerLogin">
      <form className="login-form">
        <h2>Вход</h2>
        <input type="text" placeholder="email" required onChange={(event) => setEmail(event.target.value)} />
        <input type="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)} />
        <button type="button" onClick={(event) => handleLogin(event)}>Войти</button>
        <button type="button" onClick={(event) => handleRegister(event)}>Регистрация</button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default Authorization;
