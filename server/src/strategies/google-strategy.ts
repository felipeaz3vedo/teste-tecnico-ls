import passport from 'passport';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: VerifyCallback
    ) => {
      const defaultUser = {
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
      };

      let user = await prisma.user.findUnique({
        where: {
          googleId: profile.id,
        },
      });

      if (user) {
        return done(null, user);
      }

      user = await prisma.user.create({
        data: defaultUser,
      });

      return done(null, user);
    }
  )
);

passport.serializeUser((user: any, done: VerifyCallback) => {
  console.log('Serializing user:', user.id);
  done(null, user);
});

passport.deserializeUser(async (user: any, done: VerifyCallback) => {
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id,
  //   },
  // });

  console.log('DeSerialized user', user);

  done(null, user);
});
