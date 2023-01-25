const express = require('express');
const passport = require('passport');

const { recoverySchema } = require('../schemas/recovery.schema');
const validatorHandler = require('../middlewares/validator.handler');
const AuthService = require('../services/auth.service');
const service = new AuthService();

const router = express.Router();

router.post('/login',
  passport.authenticate('local', {session: false, }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const jwToken = service.signToken(user);
      // console.log(user);
      res.json({ user, jwToken });
    } catch (error) {
      next(error)
    }
  }
);

router.post('/recovery',
  async (req, res, next) => {
    try {

      const { email } = req.body;
      const rta = await service.sendRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error)
    }
  }
);

router.post('/change-password',
  validatorHandler(recoverySchema, 'body'),
  async (req, res, next) => {
    try {
      const { token, password } = req.body;
      const rta = await service.changePassword(token, password);
      res.json(rta);
    } catch (error) {
      next(error)
    }
  }
);




module.exports = router;
/*


*/
