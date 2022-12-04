const jwt = require('jsonwebtoken');

const secret = 'maya';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNjY5NjkzMDQ5fQ.wmucnUclojEGqJLu8nx0D4pNvRrwDKRBaS3l83bPZ48';

function verifyToken(token, secret){
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload)
