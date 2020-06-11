import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';


function Navv(props) {
	return (
    <Container bg="dark" className = "align-items-stretch">
      <Navbar bg="dark" variant="dark" className="p-0 rounded" >
         <Nav  variant="pills" className="w-100 ">
          <Nav.Item  className="flex-grow-1">
            <Nav.Link id="trivia" onClick ={props.onClick} className={(props.activeTab === 'trivia')?'active':''}>Trivia</Nav.Link>
          </Nav.Item>
          <Nav.Item  className="flex-grow-1">
            <Nav.Link id="math" onClick ={props.onClick} className={(props.activeTab === 'math')?'active':''}>Math</Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-grow-1">
            <Nav.Link id="year" onClick ={props.onClick} className={(props.activeTab === 'year')?'active':''}>Year</Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-grow-1 ">
            <Nav.Link id="date" onClick ={props.onClick} className={(props.activeTab === 'date')?'active':''}>Date</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
		);
}

export default Navv;
