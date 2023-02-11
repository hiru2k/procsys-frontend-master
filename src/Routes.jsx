import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/AdminDelivery/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Categories from "./pages/Categories/Categories";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import GetProducts from "./pages/Products/GetProducts";
import Products from "./pages/Products/Products";
import ViewSupplier from "./pages/Supplier/ViewSupplier";
import DisplaySuppliers from "./pages/Supplier/DisplaySuppliers";
import NotFound from "./pages/NotFound/NotFound";
import ResponseRequest from "./pages/ResponseRequest/ResponseRequest";
import ViewRequests from "./pages/ViewRequests/ViewRequests";
import ProductsView from "./pages/Supplier/ProductsView";
import SiteList from "./pages/Sites/SitesList";
import DisplaySite from "./pages/Sites/DisplaySite";
import SiteManagersList from "./pages/SiteManagers/SiteManagersList";
import DisplaySiteManager from "./pages/SiteManagers/DisplaySiteManager";
import { useDispatch, useSelector } from "react-redux";
import Startup from "./pages/Startup/Startup";
import authHelper from "./helpers/auth.api";
import { authActions } from "./redux/slices/auth.slice";

const authRoutes = [
	{
		path: "/",
		element: <Home />,
	},

	{
		path: "requests",
		element: <ViewRequests />,
	},
	{
		path: "requests/:id",
		element: <ResponseRequest />,
	},

	// products
	{
		path: "create_product",
		element: <CreateProduct />,
	},
	{
		path: "edit_product/:id",
		element: <CreateProduct />,
	},
	{
		path: "getProducts",
		element: <GetProducts />,
	},
	{
		path: "products",
		element: <Products />,
	},
	{
		path: "detail/:id",
		element: <DetailProduct />,
	},

	// suplliers
	{
		path: "suppliers",
		element: <DisplaySuppliers />,
	},
	{
		path: "suppliers/create",
		element: <ViewSupplier />,
	},
	{
		path: "suppliers/:id",
		element: <ViewSupplier />,
	},
	{
		path: "suppliers/:id/products",
		element: <ProductsView />,
	},

	// sites
	{
		path: "sites",
		element: <SiteList />,
	},
	{
		path: "sites/create",
		element: <DisplaySite />,
	},
	{
		path: "sites/:id",
		element: <DisplaySite />,
	},

	// sites managers
	{
		path: "site-managers",
		element: <SiteManagersList />,
	},
	{
		path: "site-managers/create",
		element: <DisplaySiteManager />,
	},
	{
		path: "site-managers/:id",
		element: <DisplaySiteManager />,
	},

	// not used
	{
		path: "category",
		element: <Categories />,
	},
];

const unAuthRoutes = [
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "register",
		element: <Register />,
	},
];

const commonRoutes = [
	{
		path: "*",
		element: <NotFound />,
	},
];

const initRoutes = [
	{
		path: "/",
		element: <Startup />,
	},
	{
		path: "*",
		element: <Startup />,
	},
];

const Routes = () => {
	const { user } = useSelector((s) => s.auth);
	const [routes, setRoutes] = useState(initRoutes);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		if (loading) return;

		let routes = [];
		if (user) {
			routes = [...authRoutes];
		} else {
			routes = [...unAuthRoutes];
		}
		routes = [...routes, ...commonRoutes];
		setRoutes(routes);
	}, [user, loading]);

	useEffect(() => {
		checkLoggedUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const checkLoggedUser = async () => {
		try {
			const user = await authHelper.getLoggedUser();
			if (user) dispatch(authActions.setUser(user));
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: routes,
		},
	]);

	return <RouterProvider router={router} />;
};
export default Routes;
