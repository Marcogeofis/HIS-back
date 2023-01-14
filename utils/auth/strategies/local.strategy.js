const { Strategy } = require('passport-local');

const AuthService = require('./../../../services/auth.service');
const service = new AuthService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.getUser(email, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;

// mi password de mi primer auth marco123antonio123 token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNjY5NzkwMDY5fQ.AiUFkVQNVoSUBhbWgJUCAlrTMKuxmwBORSOYqHKdAiU
// teacher2 contraseña mario123098 token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNjY5ODMyNTYxfQ.EEHjkrBi4t8XIfMk3ufhpbCHBJMdRcY0s7Ozc0S3I-Y
// teacher3 contraseña cortes123098 token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInJvbGUiOiJ0ZWFjaGVyQWRtaW4iLCJpYXQiOjE2Njk4MzQ0NTN9.34xCjakdEp0fAwa2A4nmYkprszyShCrmbEvUYQv-B_w
