import React, { Component } from 'react';
import './App.css';
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import Compatibility from './components/Compatibility';
import RandomQuotes from './components/RandomQuotes';

import mainLogo from './header.png';

class App extends Component {
  constructor() {
    super();

    this.state={
      nameOne: '',
      nameTwo: ''
    }

    this.updateNameOne = this.updateNameOne.bind(this);
    this.updateNameTwo = this.updateNameTwo.bind(this);
  }

  updateNameOne(input) {
    this.setState({
      nameOne: input
    })
  }

  updateNameTwo(input) {
    this.setState({
      nameTwo: input
    })
    console.log(this.state.nameTwo)
  }

  render() {
    return (
      <div className="App">
        
        <div className="header">
          <img src={mainLogo} alt='The Love Calculator' />
            <p className="intro-text">So, does she really have a crush on you? Is he husband material, or just a boy toy? What are my chances with Megan Fox? These are all important, potentially life changing, questions that we can help you understand. And remember, there is no better predictor of successful relationships than a compatibility score.</p>
        </div>
        
        <div className="names flex">
        <FirstName nameOne={this.state.nameOne} updateNameOne={this.updateNameOne} />
        <SecondName nameTwo={this.state.nameTwo} updateNameTwo={this.updateNameTwo} />
        </div>

        <Compatibility nameOne={this.state.nameOne} nameTwo={this.state.nameTwo} />
        <RandomQuotes />

      </div>
    );
  }
}

export default App;
