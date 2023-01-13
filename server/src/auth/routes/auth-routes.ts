import { ensureLoggedIn } from 'connect-ensure-login';
import { Router } from 'express';
import passport from 'passport';

const authRoutes = Router();

const rootURL = 'http://localhost:5173';

authRoutes.get('/login/success', ensureLoggedIn(rootURL), (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
    });
  }
});

authRoutes.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

authRoutes.get('/google/login', passport.authenticate('google'));

// Redireciono para a mesma página('/') para deixar a resposabilidade
//  dos redirecionamentos a cargo do front-end da aplicação.
authRoutes.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: rootURL,
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
