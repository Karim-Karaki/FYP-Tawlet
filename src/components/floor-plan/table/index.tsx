// import React from "react";
import Circle from "./Circle";
import Rect from "./Rect";
import Square from "./Square";
/*
const TableShapeStyle: any = ({ shape }: { shape: ITableShape }) => {
	return shape === "circular"
		? {
				borderRadius: "100%",
		  }
		: {
				borderRadius: "3px",
		  };
};

const Table: React.FC<ITable> = ({
	shape = "rectangular",
	angle = 0,
	chair = 6,
}) => {
	var width: string = `${
		shape === "rectangular"
			? (Math.round(chair / 2) > 1 ? Math.round(chair / 2) : 1) * 67
			: (Math.round(chair / 4) > 1 ? Math.round(chair / 4) : 1) * 65
	}px`;
	var height: string =
		shape === "rectangular"
			? `65px`
			: `${(Math.round(chair / 4) > 1 ? Math.round(chair / 4) : 1) * 65}px`;

	const Chair: React.FC<{ index: number }> = ({ index }) => {
		// const chairPosition = {
		// 	...(index < chair / 2
		// 		? {
		// 				top: 0,
		// 		  }
		// 		: {
		// 				bottom: 0,
		// 				transform: "rotate(180deg)",
		// 		  }),
		// 	...(shape === "rectangular"
		// 		? {
		// 				left: `${
		// 					(index >= chair / 2 ? index - Math.round(chair / 2) : index) *
		// 						67 +
		// 					30
		// 				}px`,
		// 		  }
		// 		: {}),
		// };

		var quadrant = Math.round(chair / 4);

		const chairPosition =
			shape === "square"
				? {
						...(index < quadrant
							? {
									top: 0,
									left: "50%",
									transform: `translateX(${(index - quadrant) * 50}px)`,
							  }
							: index < 2 * quadrant
							? {
									right: 0,
									top: "50%",
									transform: `rotate(90deg) translateX(${
										(index - quadrant) * 50
									}px)`,
							  }
							: index < 3 * quadrant
							? {
									bottom: 0,
									left: "50%",
									transform: `rotate(180deg) translateX(${
										(index - quadrant) * 50
									}px)`,
							  }
							: index < 4 * quadrant
							? {
									left: 0,
									top: "50%",
									transform: "rotate(270deg)",
							  }
							: {}),
				  }
				: shape === "circular"
				? {
						...(index < quadrant
							? {
									top: 0,
									left: "50%",
							  }
							: index < 2 * quadrant
							? {
									right: 0,
									top: "50%",
									transform: "rotate(90deg)",
							  }
							: index < 3 * quadrant
							? {
									bottom: 0,
									left: "50%",
									transform: "rotate(180deg)",
							  }
							: index < 4 * quadrant
							? {
									left: 0,
									top: "50%",
									transform: "rotate(270deg)",
							  }
							: {}),
				  }
				: {
						left: `${
							(index >= chair / 2 ? index - Math.round(chair / 2) : index) *
								67 +
							30
						}px`,
						...(index < chair / 2
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

	return (
		<div
			style={{
				position: "relative",
				height: "fit-content",
				width: "fit-content",
				padding: "30px",
				transform: `rotate(${angle}deg)`,
			}}
		>
			<div
				style={{
					width,
					height,
					position: "relative",
					background: "#5E81AC",
					...TableShapeStyle({ shape }),
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: "0 0 10px #00000077",
					zIndex: 2,
					color: "#2E3440",
					fontSize: "0.8rem",
				}}
			>
				<div
					style={{
						transform: `rotate(${-angle}deg)`,
					}}
				>
					{chair} Seats
				</div>
			</div>
			{Array(chair)
				?.fill?.("chair")
				?.map?.((_x, i) => (
					<Chair
						key={i}
						index={i}
					/>
				))}
		</div>
	);
};

*/

export default {
  Circle,
  Rect,
  Square,
};
