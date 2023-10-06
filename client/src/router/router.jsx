import React from "react";

import { createBrowserRouter } from "react-router-dom";

import AuthorizationPage from "../pages/authorizationPage/AuthorizationPage";
import FeedPage from "../pages/feedPage/FeedPage";
import UserPage from "../pages/userPage/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizationPage />,
  },
  {
    path: "/feed",
    element: <FeedPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
]);

export default router;
