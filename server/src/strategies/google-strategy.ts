import passport from 'passport';
import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
      scope: ['profile', 'email'],
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user: any, done: Function) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: Function) => {
  done(null, user);
});
