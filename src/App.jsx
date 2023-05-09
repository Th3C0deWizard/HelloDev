import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ROLES } from "./const.js";
import AddArticle from "./routes/AddArticle";
import ArticleView from "./routes/ArticleView";
import AuthorArticles from "./routes/AuthorArticles";
import AuthorMenu from "./routes/AuthorMenu";
import AuthorsList from "./routes/AuthorsList";
import EditorArticlesHistory from "./routes/EditorArticlesHistory";
import EditorMenu from "./routes/EditorMenu";
import EditorReceivedArticles from "./routes/EditorReceivedArticles";
import ForgotPassword from "./routes/ForgotPassword";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import Register from "./routes/Register";
import RestorePassword from "./routes/RestorePassword";
import AuthorNotifications from "./routes/AuthorNotifications";
import Root from "./routes/Root";

function App() {
  const initialUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(initialUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header setU={setUser} user={user} />,
      children: [
        {
          path: "/",
          element: <Root />,
        },
        {
          path: "ArticleView",
          element: <ArticleView />,
        },
        {
          path: "Login",
          element: <Login setUser={setUser} user={user} />,
        },
        {
          path: "ForgotPassword",
          element: <ForgotPassword />,
        },
        {
          path: "RestorePassword",
          element: <RestorePassword />,
        },
        {
          path: "Register",
          element: <Register />,
        },
        {
          path: "/",
          element: <ProtectedRoute isAllowed={user?.rol === ROLES.EDITOR} />,
          children: [
            {
              path: "EditorMenu",
              element: <EditorMenu />,
            },
            {
              path: "EditorReceivedArticles",
              element: <EditorReceivedArticles user={user} />,
            },
            {
              path: "EditorArticlesHistory",
              element: <EditorArticlesHistory user={user} />,
            },
            {
              path: "AuthorsList",
              element: <AuthorsList />,
            },
          ],
        },
        {
          path: "/",
          element: <ProtectedRoute isAllowed={user?.rol === ROLES.AUTOR} />,
          children: [
            {
              path: "AuthorMenu",
              element: <AuthorMenu />,
            },
            {
              path: "AddArticle",
              element: <AddArticle user={user} />,
            },
            {
              path: "AuthorArticles",
              element: <AuthorArticles user={user} />,
            },
            {
              path: "Profile",
              element: <Profile autor={user} setAutor={setUser} />,
            },
            {
              path: "AuthorNotifications",
              element: <AuthorNotifications user={user} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
