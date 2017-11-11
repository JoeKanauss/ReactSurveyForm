import React from 'react';


export class Select extends React.Component{
	constructor(props){
		super(props);
		this.state = {selectOptions: ['1. Best time',
									  '2. Next Best time',
									  '3. Not as good',
									  '4. Worst time']};
									  
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
	
		if(e.target.value != "default"){
		var times = ['Monday/Wednesday 10:10am-Noon', 'Tuesday6:00pm-9:00pm', 'Wednesday 6:00p-9:00pm', 'Tuesday/Thursday 10:10am-Noon'];
		
		const setDeleteOption = e.target.value;
		alert(setDeleteOption);
		
		const optionText = this.state.selectOptions[setDeleteOption];
		alert("optionText: "+ optionText);
		
		var spanId = times.indexOf(e.target.id);
		alert(spanId);
		
		document.getElementById("span_" + spanId).innerHTML = optionText + "----";
		
		var array = this.state.selectOptions;
		alert('state of selectOptions: ' + array);
		
		array.splice(setDeleteOption,1);
		
		this.setState({selectOptions: array});
		alert('new state of selectOptions: ' + array);
		}
	}
	
	render(){
		
		const optionList =(this.state.selectOptions.map((choice, i) =>
						<option key={i} index={i} value={i}>{choice}</option>));
		
		return (
			<div>
				<h1>WDV 321 Advanced JS - React.js</h1>
				<form name="form1" method="post" action="">
				<fieldset>
				   <p>
        <label>Email:
          <input type="text" name="cust_email" id="cust_email" />
        </label>
      </p>
      <p>Please rate the following times from best (1) to worst (4)</p>
      <p>
			<span id="span_0"><select id='Monday/Wednesday 10:10am-Noon' onChange={this.handleChange}>
				<option value="default">--Select Convenience--</option>
					{optionList}
			</select> </span>
      		Monday/Wednesday 10:10am-Noon
      </p>
      <p>
			<span id="span_1"><select id='Tuesday6:00pm-9:00pm' onChange={this.handleChange}>
			<option value="default">--Select Convenience--</option>
					{optionList}
			</select> </span>
      		Tuesday 6:00pm-9:00pm
      </p>
      <p>
			<span id="span_2"><select id='Wednesday 6:00p-9:00pm' onChange={this.handleChange}>
			<option value="default">--Select Convenience--</option>
					{optionList}
			</select>   </span>
      		Wednesday 6:00pm-9:00pm
      </p>
      <p>
			<span id="span_3"><select id='Tuesday/Thursday 10:10am-Noon' onChange={this.handleChange}>
			<option value="default">--Select Convenience--</option>
					{optionList}
			</select>    </span>  
      		Tuesday/Thursday 10:10am-Noon
      </p>
      <p>
        <input type="submit" name="button" id="button" value="Submit" />
        <input type="reset" name="button2" id="button2" value="Reset" />
      </p>
  </fieldset>  
</form>
<p>&nbsp;</p>
			</div>
			);
	}
			
}