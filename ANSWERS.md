<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
  - The purpose of using `sessions` is to store data about a user, and persist data between page requests

2. What does bcrypt do to help us store passwords in a secure manner.
  - bcrypt helps us store passwords by creating a hash of our password, increasing our security

3. What does bcrypt do to slow down attackers?
  - It goes through rounds of hashing (we define it), which adds a more complex security to our passwords

4. What are the three parts of the JSON Web Token?

  1. Header
    - Also a regular object where we can see the signature type
  2. Payload
    - Just a regular JS object --> contains information
  3. Signature
    - Can only be produced when you have the payload and secret
