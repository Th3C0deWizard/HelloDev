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

function App() {
	const [user, setUser] = useState(null);

	const router = createBrowserRouter([
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
			path: "/AuthorMenu",
			element: (
				<ProtectedRoute isAllowed={!!user && user.rol === "autor"}>
					<AuthorMenu />
				</ProtectedRoute>
			),
		},
		{
			path: "AddArticle",
			element: (
				<ProtectedRoute isAllowed={!!user && user.rol === "autor"}>
					<AddArticle />
				</ProtectedRoute>
			),
		},
		{
			path: "AuthorArticles",
			element: (
				<ProtectedRoute isAllowed={!!user && user.rol === "autor"}>
					<AuthorArticles />
				</ProtectedRoute>
			),
		},
		{
			path: "Profile",
			element: (
				<ProtectedRoute isAllowed={!!user && user.rol === "autor"}>
					<Profile />
				</ProtectedRoute>
			),
		},
		{
			path: "EditorMenu",
			element: (
				<ProtectedRoute isAllowed={!!user && user.rol === "editor"}>
					<EditorMenu />
				</ProtectedRoute>
			),
		},
		{
			path: "EditorReceivedArticles",
			element: (
				<ProtectedRoute isAllowed={!!user && user.rol === "editor"}>
					<EditorReceivedArticles />
				</ProtectedRoute>
			),
		},
		{
			path: "EditorArticlesHistory",
			element: (
				<ProtectedRoute isAllowed={!!user && user.rol === "editor"}>
					<EditorArticlesHistory />
				</ProtectedRoute>
			),
		},
		{
			path: "AuthorsList",
			element: (
				<ProtectedRoute isAllowed={!!user && user.rol === "editor"}>
					<AuthorsList />
				</ProtectedRoute>
			),
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
