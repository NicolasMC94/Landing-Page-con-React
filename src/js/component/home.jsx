import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import CardBox from "./cardBox.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<div>
				<Navbar />
			</div>
			<div >
				<Jumbotron />
				<CardBox />
			</div>
			
			<div className="container-fluid">
			<Footer />	
			</div>
			
		</div>
	);
};

export default Home;
