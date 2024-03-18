import React from "react";
import { ITable } from "../types";
import Chair from "../chair";
import Draggable from "react-draggable";

const Rect: React.FC<ITable> = ({ angle = 0, chair = 6 }) => {
	var width = `${
		(Math.round(chair / 2) > 1 ? Math.round(chair / 2) : 1) * 50
	}px`;
	var height = "67px";

	return (
		<Draggable>
			<div>
				<div
					style={{
						position: "relative",
						height: "fit-content",
						width: "fit-content",
						padding: "30px 0",
						transform: `rotate(${angle}deg)`,
					}}
				>
					<div
						style={{
							width,
							height,
							position: "relative",
							background: "#5E81AC",
							// ...TableShapeStyle({ shape }),
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
								totalChair={chair}
							/>
						))}
				</div>
			</div>
		</Draggable>
	);
};

export default Rect;
