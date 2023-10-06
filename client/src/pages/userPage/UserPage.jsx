import React from "react";

import Wrapper from "../../componenst/wrapper/Wrapper";
import UserInfo from "../../componenst/user/UserInfo";

const UserPage = () => {
  return (
    <>
      <Wrapper />
      <div className="container">
        <UserInfo />
      </div>
    </>
  );
};

export default UserPage;
