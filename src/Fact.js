import React from 'react';
import {Container, Card} from 'react-bootstrap'

function Fact(props) {
	if(props.fact!== '')
	return (
		<Container className="d-flex justify-content-center mt-4" >
			<Card style={{maxWidth: '310px'}} className="bg-light text-dark p-3">
               <Card.Text>
               		{props.fact}
               	</Card.Text>
            </Card>
            </Container>
           );
else
	return null;
}

export default Fact;


  