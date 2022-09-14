import React from "react";
import Card from "./card/card.jsx";

const CardBox = () => {
	return (
		<div className="d-flex justify-content-center mb-5">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default CardBox