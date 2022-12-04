const jwt = require('jsonwebtoken');

const secret = 'maya';
const payload = {
  sub:1,
  role: 'teacher'
};

function signToken(payload, secret){
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token)
