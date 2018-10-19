import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    username: '',
    password: ''      
  };

  componentDidMount() {
    console.log('did mount');
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:3300/api/register';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data); 
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch(err => console.log('ERROR', err));
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
          <button type="submit">Register</button>
        </div>
      </form>
    )
  }
}

export default SignUp;