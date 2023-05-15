import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ROLES } from "./const.js";
import ArticleView from "./routes/ArticleView";
import AuthorArticles from "./routes/AuthorArticles";
import AuthorNotifications from "./routes/AuthorNotifications";
import AuthorsList from "./routes/AuthorsList";
import EditorArticlesHistory from "./routes/EditorArticlesHistory";
import EditorReceivedArticles from "./routes/EditorReceivedArticles";
import ForgotPassword from "./routes/ForgotPassword";
import Profile from "./routes/Profile";
import Register from "./routes/Register";
import RestorePassword from "./routes/RestorePassword";
import Root from "./routes/Root";

function App() {
	const initialUser = JSON.parse(localStorage.getItem("user"));
	const [user, setUser] = useState(initialUser);
	const [showLogin, setShowLogin] = useState(false);

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<Header setU={setUser} user={user} setShowLogin={setShowLogin} />
			),
			children: [
				{
					path: "/",
					element: (
						<Root
							setUser={setUser}
							showLogin={showLogin}
							setShowLogin={setShowLogin}
						/>
					),
				},
				{
					path: "ArticleView",
					element: <ArticleView />,
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
							path: "EditorReceivedArticles",
							element: <EditorReceivedArticles user={user}/>,
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
