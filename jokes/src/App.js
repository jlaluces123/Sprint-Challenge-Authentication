import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';

import Jokes from './jokes/Jokes.js';
import SignUp from './auth/Signup.js';
import SignIn from './auth/Signin.js';

const Home = props => {
  return (
    <div>
      <h2>Ready for some terrible jokes? Sign in and lets get crackin'</h2>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/" exact>
              Home
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/signin">Sign In</NavLink>
            &nbsp;|&nbsp;
            <NavLink to='/signup'>Sign Up</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.signOut}>Signout</button>
          </nav>
        </header>
        <main>
          <Route path="/" component={Home} exact />
          <Route path="/Jokes" component={Jokes} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </main>
      </div>
    );
  }
}

export default App;
