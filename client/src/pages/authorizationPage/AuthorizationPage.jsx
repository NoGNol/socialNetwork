import React, { useState } from "react";
import "./AuthorizationPage.css";

function AuthorizationPage() {
  const [status, setStatus] = useState("");
  const login = () => {
    setStatus("login");
  };

  const registrate = () => {
    setStatus("regist");
  };

  return (
    <></>
  );
}

export default AuthorizationPage;
