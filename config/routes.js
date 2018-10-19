const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig.js');
const { authenticate } = require('./middlewares');
const { generateToken } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const credentials = req.body;

  const hash = bcrypt.hashSync(credentials.password, 10);
  credentials.password = hash;

  db('users')
    .insert(credentials)
    .then(ids => {
      const id = ids[0];
      return db('users').where({ username: credentials.username }).first()
      // so when a user registers, they don't have to login for a token
        .then(res => {
          const token = generateToken(res);
          res.status(201).json({ welcome: res.username, token })
        })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

function login(req, res) {
  // implement user login
  const credentials = req.body;

  db('users')
    .where({ username: credentials.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        console.log(user);
        const token = generateToken(user);
        // on succcess, create a new JWT with user id as subject
        res.status(200).json({ welcome: user.username, token });
      } else {
        // if failure, send back correct HTTPCODE with message...
        res.status(401).json({ message: 'You shall not pass!' });
      }
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
