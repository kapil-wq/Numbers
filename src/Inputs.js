import React from 'react';

function Inputs(props) {
	if(props.activeTab==='trivia') 
	return (
		<div className="form">
	        <label>Number</label>
	        <input type="number" onKeyUp ={props.enterPress} onChange={props.numberChange} value={props.number} required/>
	        <button onClick ={props.getFact} >Get fact</button>	  
	        <button onClick ={props.getRandomFact}>Get Random fact</button>	  
      	</div>
	   
	);
	else if(props.activeTab==='math')
		return (
		<div className="form">
	        <label>Number</label>
	        <input type="number" onKeyUp ={props.enterPress} onChange={props.numberChange} value={props.number} />
	       	<button onClick ={props.getFact} >Get fact</button>	  
	       	<button onClick ={props.getRandomFact} >Get Random fact</button>	  
	  
      	</div>
			);
	else if(props.activeTab==='year')
		return (
		<div className="form">
	        <label>Year</label>
	        <input type="number" onKeyUp ={props.enterPress} onChange={props.numberChange} value={props.number} />	 
	        <button onClick ={props.getFact} >Get fact</button>	  	         
	        <button onClick ={props.getRandomFact} >Get Random fact</button>	  	         
      	</div>
			);
	else if(props.activeTab==='date')
		return (
			<div className="form">
	        <label>Month</label>
	        <input type="number" onChange={props.monthChange} value={props.month}/> 	 
	        <label>Day</label>
	        <input type="number" onChange={props.dayChange} value={props.day}/> 
	        <button onClick ={props.getDateFact} >Get fact</button>	  	       
	        <button onClick ={props.getRandomFact} >Get Random fact</button>	  	       
       	</div>
			);
}



export default Inputs;