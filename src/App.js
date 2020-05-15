import React, {Component} from 'react';
import './App.scss';
import Nav from './Nav';
import Inputs from './Inputs';
import Fact from './Fact';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab  : 'trivia',
      fact : '',
      number: '',
      month: '',
      day: '',
    }
  }

  changeTab = (e) => {
    this.setState({activeTab: e.target.id, number: '', month: '', day: '', fact: ''});
  }

  enterPress = (e) => {
    
    if(e.key === 'Enter')
      this.getFact();
  }

  getFact = () =>  {
    if(this.state.number==='')
      alert("Enter valid input");
    else {
     this.setState({fact: 'Loading...'});
     fetch(`http://numbersapi.com/${this.state.number}/${this.state.activeTab}?json`)
      .then(response=> response.json())
      .then(fact => {this.setState({ fact: fact.text})});
    }
  }

  getRandomFact = () => {
    this.setState({fact: 'Loading...'});
      fetch(`http://numbersapi.com/random/${this.state.activeTab}?json`)
      .then(response=> response.json())
      .then(fact => {this.setState({ fact: fact.text})});
  }

  getDateFact = () => {
    if(this.state.day==='' || this.state.month==='')
      alert("Enter valid input");
    else {
    this.setState({fact: 'Loading...'});
    fetch(`http://numbersapi.com/${this.state.month}/${this.state.day}/${this.state.activeTab}?json`)
      .then(response=> response.json())
      .then(fact => {this.setState({ fact: fact.text})});
    }
  }

  numberChange = (e) => {
        this.setState({number: e.target.value});      
    }
  

  monthChange = (e) => {
        this.setState({month: e.target.value});       
    }
  

  dayChange = (e) => {
        this.setState({day: e.target.value});
    }
  

  render() {
  return (
    <div>
      <div className = "header">
      <h1>Numbers Facts</h1>
      </div>
      <Nav activeTab={this.state.activeTab} 
      onClick = {this.changeTab}/>
      <Inputs activeTab={this.state.activeTab} enterPress={this.enterPress} getFact={this.getFact} getRandomFact={this.getRandomFact} getDateFact={this.getDateFact} numberChange={this.numberChange} monthChange={this.monthChange} dayChange={this.dayChange} number={this.state.number} month={this.state.month} day={this.state.day}/>
      <Fact fact={this.state.fact}/>
    </div>
  );
}
}

export default App;
