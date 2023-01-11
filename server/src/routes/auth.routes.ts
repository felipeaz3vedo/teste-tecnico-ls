import { ensureLoggedIn } from 'connect-ensure-login';
import { Router } from 'express';
import passport from 'passport';

const authRoutes = Router();

const successURL = 'http://localhost:5173/plataform';
const rootURL = 'http://localhost:5173';

authRoutes.get(
  '/login/success',
  ensureLoggedIn('http://localhost:5173/'),
  (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: 'successfull',
        user: req.user,
      });
    }
  }
);

authRoutes.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

authRoutes.get('/google/login', passport.authenticate('google'));

authRoutes.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: successURL,
    failureRedirect: '/login/failed',
  })
);

authRoutes.get('/logout', (req, res) => {
  req.logOut({ keepSessionInfo: false }, (error) => {
    console.log(error);
  });
  res.redirect(rootURL);
});

export { authRoutes };
