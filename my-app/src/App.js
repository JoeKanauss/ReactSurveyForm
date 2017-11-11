import React from 'react';
import ReactDOM from 'react-dom';
import {Select} from './Select';

export class App extends React.Component{
	
	
	
	render(){
		return(
			<div>
			<h1>Hopefully this works...</h1>
			<Select />
			<span id="timesInOrder"></span>
			</div>
			);
	}
}

export default App;