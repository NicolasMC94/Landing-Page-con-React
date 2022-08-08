import React from 'react';
import rigoImage from "../../../img/rigo-baby.jpg";
import "../card/card.css" 

const Card = () => {
    return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={rigoImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export default Card
