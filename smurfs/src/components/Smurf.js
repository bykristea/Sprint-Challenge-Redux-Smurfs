import React from "react";
import {connect} from 'react-redux';

import {deleteSmurf} from '../actions';
const Smurf = props => {
    const handleDelete = () => {
        props.deleteSmurf(props.id);
    }
	return (
		<div>
			<p>Name: {props.smurf.name}</p>
			<p>Age: {props.smurf.age} smurffin years old</p>
			<p>Height: {props.smurf.height} smurffin tall.</p>
            <button onClick={handleDelete}>Delete</button>
		</div>
	)
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {deleteSmurf})(Smurf);