import React from "react";
import Card from "./card/card.jsx";

const CardBox = () => {
	return (
		<div className="cont container-fluid row">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default CardBox