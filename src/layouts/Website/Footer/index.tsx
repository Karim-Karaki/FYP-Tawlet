import Iconify from "@components/iconify";
import React from "react";

const WebsiteFooter: React.FC = () => {
	return (
		<div className="w-screen text-center pb-3 flex flex-row items-center justify-center gap-2">
			From{" "}
			<a
				href="https://github.com/tam11a"
				className="text-xl font-medium"
			>
				Tam
			</a>
			<Iconify
				icon={"line-md:github-twotone"}
				className="text-2xl"
			/>
		</div>
	);
};

export default WebsiteFooter;
