import React from "react";

const Chair: React.FC<{ index: number; totalChair: number }> = ({
	index,
	totalChair,
}) => {
	var chairPosition = {
		left: `${
			(index >= totalChair / 2 ? index - Math.round(totalChair / 2) : index) *
			50
		}px`,
		...(index < totalChair / 2
			? {
					top: 0,
			  }
			: {
					bottom: 0,
					transform: "rotate(180deg)",
			  }),
	};

	return (
		<div
			style={{
				position: "absolute",
				width: "40px",
				height: "40px",
				margin: "5px",
				borderTopLeftRadius: "12px",
				borderTopRightRadius: "12px",
				backgroundColor: "#4C566A",
				zIndex: 1,
				boxShadow: "0 0 10px #00000077",
				...chairPosition,
			}}
		>
			<div
				style={{
					position: "absolute",
					bottom: 0,
					left: "50%",
					transform: "translateX(-50%)",
					width: "30px",
					height: "35px",
					borderTopLeftRadius: "8px",
					borderTopRightRadius: "8px",
					backgroundColor: "#434C5E",
					boxShadow: "inset 0 0 10px #00000077",
				}}
			/>
		</div>
	);
};

export default Chair;
