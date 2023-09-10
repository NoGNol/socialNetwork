import React from "react";

import { createBrowserRouter } from "react-router-dom";

import AuthorizationPage from "../pages/authorizationPage/AuthorizationPage";
import FeedPage from "../pages/feedPage/FeedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthorizationPage />,
  },
  {
    path: "/feed",
    element: <FeedPage />,
  },
]);

export default router;
