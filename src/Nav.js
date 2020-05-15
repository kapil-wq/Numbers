import React from 'react';

function Nav(props) {
	return (
	<div className="nav"> 
      <ul>
        <li><button id="trivia" name="nav-btn" onClick ={props.onClick} className={(props.activeTab === 'trivia')?'active':'nactive'}>Trivia</button></li>
        <li><button id="math" name="nav-btn" onClick ={props.onClick} className={(props.activeTab === 'math')?'active':'nactive'}>Math</button></li>
        <li><button id="year" name="nav-btn" onClick ={props.onClick} className={(props.activeTab === 'year')?'active':'nactive'}>Year</button></li>
        <li><button id="date" name="nav-btn" onClick ={props.onClick} className={(props.activeTab === 'date')?'active':'nactive'}>Date</button></li>        
      </ul>      
    </div>


		);
}

export default Nav;
