import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Signin</button>
        </div>
      </form>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:3300/api/login';
    console.log(this.state);
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data, 'RES.DATA');
        // lets set our jwtToken into our localStorage!
        // We can then pass the token in our sign-in to our users list
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch(err => {
        console.error('ERROR', err);
      });
  };
}

export default Signin;