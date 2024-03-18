import { lazy } from "react";
import { PRIVATE_ROUTES } from "./paths";

export const privateRoutes = [
	{
		path: PRIVATE_ROUTES.DASHBOARD,
		Component: lazy(() => import("@pages/Dashboard")),
	},
	{
		path: PRIVATE_ROUTES.FLOOR,
		Component: lazy(() => import("@pages/Floor")),
	},
	{
		path: PRIVATE_ROUTES.NOTFOUND,
		Component: lazy(() => import("@pages/NotFound")),
	},
	{
		path: PRIVATE_ROUTES.REVIEWS,
		Component: lazy(() => import("@pages/Reviews")),
	},
	{
		path: PRIVATE_ROUTES.RESERVATIONS,
		Component: lazy(() => import("@pages/Reservations")),
	},

	//{
	// 	path: PRIVATE_ROUTES.RESTAURANT,
	// 	Component: lazy(() => import("@pages/Restaurant")),
	// },
	// {
	// 	path: PRIVATE_ROUTES.MENU,
	// 	Component: lazy(() => import("@pages/Restaurants")),
	// },
];
