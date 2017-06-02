import React, { Component } from "react";
import style from "../globalStyle";

class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<h1 style={{...style.rainbow, display:"inline-block"}}>This is my first app using React, Redux, Bootstrap</h1>
				<p>
					<a href="https://github.com/Nevosis/react_redux_test">
						<strong>Github</strong>
					</a>
				</p>
			</div>
		);
	}
}

export default Home;


