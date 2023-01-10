import { ensureLoggedIn } from 'connect-ensure-login';
import { NextFunction, Request, Response, Router } from 'express';
import passport from 'passport';

const authRoutes = Router();

// function isLogedIn(req: Request, res: Response, next: NextFunction) {
//   if (req.user) {
//     return next();
//   }
//   res.status(401).redirect('http://localhost:5173/');
// }

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

authRoutes.get('/google', passport.authenticate('google'));

authRoutes.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/home',
    failureRedirect: '/login/failed',
  })
);

authRoutes.get('/logout', (req, res, next) => {
  req.logOut({ keepSessionInfo: false }, (error) => {
    console.log(error);
  });
  res.redirect('http://localhost:5173/');
});

export { authRoutes };
