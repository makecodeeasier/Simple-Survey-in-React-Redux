import React, { Component } from 'react';
import './App.css';
import { voteAngular, voteReact, voteVuejs } from './actions';
 

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;

  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{ 'textAlign': 'center' }} >
          <img src="./images/head.png" alt="" />
          <h2>What is your favorite front end framework in 2018?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row justify-content-center"  >
        
              <div className="col-xs-offset3 col-xs-2">
                <img src="./images/angular.png" alt="Angular" onClick={this.handleVoteAngular} />
              </div>
              <div className="col-xs-2">
                <img src="./images/react.png" alt="React" onClick={this.handleVoteReact} />
              </div>
              <div className="col-xs-2">
                <img src="./images/vue.png" alt="Vuejs" onClick={this.handleVoteVuejs} />
              </div>
            
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
