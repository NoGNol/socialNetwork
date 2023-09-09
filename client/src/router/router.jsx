import React from "react";

import { createBrowserRouter } from "react-router-dom";

import AuthorizationPage from "../pages/authorizationPage/AuthorizationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizationPage />,
  },
]);

export default router;
