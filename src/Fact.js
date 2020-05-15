import React from 'react';

function Fact(props) {
	return (
	 <div className = "fact">
      <p>
        {props.fact}
      </p>
      </div> 
      );
}

export default Fact;