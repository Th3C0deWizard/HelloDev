import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddArticle from "./routes/AddArticle";
import ArticleView from "./routes/ArticleView";
import AuthorArticles from "./routes/AuthorArticles";
import AuthorMenu from "./routes/AuthorMenu";
import AuthorsList from "./routes/AuthorsList";
import EditorArticlesHistory from "./routes/EditorArticlesHistory";
import EditorMenu from "./routes/EditorMenu";
import EditorReceivedArticles from "./routes/EditorReceivedArticles";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import Register from "./routes/Register";
import Root from "./routes/Root";

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
		path: "AddArticle",
		element: <AddArticle />,
	},
	{
		path: "Profile",
		element: <Profile />,
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
	},
	{
		path: "ArticleView",
		element: <ArticleView />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
