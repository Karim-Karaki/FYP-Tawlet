import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const WebsiteHeader = lazy(() => import("./Header"));
const WebsiteFooter = lazy(() => import("./Footer"));

const WebsiteLayout: React.FC = () => {
	return (
		<div className="h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col">
			<WebsiteHeader />
			<div className="flex-1 flex flex-col items-center justify-evenly">
				<Outlet />
			</div>
			<WebsiteFooter />
		</div>
	);
};

export default WebsiteLayout;
