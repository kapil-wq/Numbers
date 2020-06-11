import React from 'react';
import {InputGroup, FormControl, Container, Form, Button} from 'react-bootstrap';

function Inputs(props) {
	if(props.activeTab==='trivia' || props.activeTab==='math' || props.activeTab==='year') 
	return (
		<Container className="d-flex justify-content-center">
			<Container style = {{maxWidth: '525px'}} className="mt-4">
				<Form.Group controlId="formBasicEmail">
					<InputGroup className="mb-3">
					    <InputGroup.Prepend>
					      <InputGroup.Text id="basic-addon1">{(props.activeTab==='year'?'Year':'Number')}</InputGroup.Text>
					    </InputGroup.Prepend>
					    <FormControl
				    	  type="number"
					      placeholder=""
					      aria-label="Username"
					      aria-describedby="basic-addon1"
					      onKeyUp ={props.enterPress} onChange={props.numberChange} value={props.number}
					    />
					</InputGroup>
				</Form.Group>
		  	<Container fluid className="px-0 d-flex">
		  	  <Button onClick ={props.getFact} variant="info" className="flex-grow-1 border border-secondary rounded-left">
			    Submit
			  </Button>
			  	<Button onClick ={props.getRandomFact} variant="danger" className="flex-grow-1 border border-secondary rounded-right">
			    Random
			  	</Button>
		  	</Container>
	  </Container>
  </Container>
	);
	
	else if(props.activeTab==='date')
		return (
<Container className="d-flex justify-content-center">
			<Container className="w-50 mt-4">
				<Form.Group controlId="formBasicEmail">
					<InputGroup className="mb-3">
					    <InputGroup.Prepend>
					      <InputGroup.Text id="basic-addon1">Month</InputGroup.Text>
					    </InputGroup.Prepend>
					    <FormControl
				    	  type="number"
					      placeholder=""
					      aria-label="Username"
					      aria-describedby="basic-addon1"
					      onKeyUp ={props.enterPress} onChange={props.monthChange} value={props.month}
					    />
					</InputGroup>
					<InputGroup className="mb-3">
					    <InputGroup.Prepend>
					      <InputGroup.Text id="basic-addon1">Day</InputGroup.Text>
					    </InputGroup.Prepend>
					    <FormControl
				    	  type="number"
					      placeholder=""
					      aria-label="Username"
					      aria-describedby="basic-addon1"
					      onKeyUp ={props.enterPress} onChange={props.dayChange} value={props.day}
					    />
					</InputGroup>
				</Form.Group>
		  	<Container fluid className="px-0 d-flex">
		  	  <Button onClick ={props.getDateFact} variant="info" className="flex-grow-1 border border-secondary rounded-left">
			    Submit
			  </Button>
			  	<Button onClick ={props.getRandomFact} variant="danger" className="flex-grow-1 border border-secondary rounded-right">
			    Random
			  	</Button>
		  	</Container>
	  </Container>
  </Container>
			);
}



export default Inputs;

