import React from 'react';

export class Options extends React.Component{
	constructor(props){
		super(props);
		this.state = {selectOptions: ['1. Best time',
									  '2. Next Best time',
									  '3. Not as good',
									  '4. Worst time']};
	}
	
	render(){
		
		var array = this.state.selectOptions;
		alert(array);
		
		const optionList =(this.state.selectOptions.map((choice, i) =>
				<option onClick={this.removeOption} key={i} value={choice}>{choice}</option>));
		
		alert(array);
		return optionList;
	}
}