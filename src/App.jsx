import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
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
import Root from "./routes/Root";
import Header from "./components/Header";

function App() {
	const [user, setUser] = useState(null);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Header setU={setUser} user={user} />,
			children: [{
				path: "/",
				element: <Root />,
			},
			{
				path: "ArticleView",
				element: <ArticleView />,
			},
			{
				path: "Login",
				element: <Login setU={setUser} user={user} />,
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
				element: <ProtectedRoute isAllowed={!!user && user.rol === "editor"}/>,
				children: [
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
				],
			},	
			{
				path: "/",
				element: <ProtectedRoute isAllowed={!!user && user.rol === "autor"}/>,
				children: [
					{
						path: "AuthorMenu",
						element: <AuthorMenu />,
					},
					{
						path: "AddArticle",
						element: <AddArticle />,
					},
					{
						path: "AuthorArticles",
						element: <AuthorArticles user = {user}/>,
					},
					{
						path: "Profile",
						element: <Profile />,
					},
				],
	
			},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
