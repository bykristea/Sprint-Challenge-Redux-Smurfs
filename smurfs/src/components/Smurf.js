import React from "react";

const Smurf = props => {
	return (
		<div>
			<p>Name: {props.smurf.name}</p>
			<p>Age: {props.smurf.age} smurffin years old</p>
			<p>Height: {props.smurf.height} smurffin tall.</p>
		</div>
	)
}

export default Smurf;