import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Login from "./routes/login";
import Register from "./routes/register";
import SendArticle from "./routes/SendArticle";
import AuthorProfile from "./routes/AuthorProfile";
import AuthorMenu from "./routes/AuthorMenu";
import AuthorArticles from "./routes/AuthorArticles";
import EditorMenu from "./routes/EditorMenu";
import EditorReceivedArticles from "./routes/EditorReceivedArticles";
import EditorArticlesHistory from "./routes/EditorArticlesHistory";
import AuthorsList from "./routes/AuthorsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "SendArticle",
    element: <SendArticle />,
  },
  {
    path: "AuthorProfile",
    element: <AuthorProfile />,
  },
  {
    path: "AuthorMenu",
    element: <AuthorMenu />,
  },
  {
    path: "AuthorArticles",
    element: <AuthorArticles />,
  },
  {
    path: "EditorMenu",
    element: <EditorMenu />,
  },
  {
    path: "EditorReceivedArticles",
    element: <EditorReceivedArticles />,
  },
  {
    path: "EditorArticlesHistory",
    element: <EditorArticlesHistory />,
  },
  {
    path: "AuthorsList",
    element: <AuthorsList />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
