import express from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { authRoutes } from './auth/routes/auth-routes';
import { router } from './routes/products-routes';
import * as dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

const passporportSetup = require('./auth/strategies/google-strategy');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY!],
    maxAge: 8640000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use(router);

app.listen('3333');

export { prisma };
