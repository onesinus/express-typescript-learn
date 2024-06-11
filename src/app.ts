import express, { ErrorRequestHandler } from 'express';
import session from 'express-session';

import dotenv from "dotenv";

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import router from './routes';
import * as OpenApiValidator from 'express-openapi-validator';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express();
const path = require('path');

app.use(express.json()); 
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Session Config
const session_config = {
  secret: process.env.SESSION_SECRET_KEY ?? '',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false
  }
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
  session_config.cookie.secure = true
}
app.use(session(session_config));
// End Session Config

// Open API validator
const spec = path.join(__dirname, 'api.yaml');
app.use('/spec', express.static(spec));

app.use(
  OpenApiValidator.middleware({
    apiSpec: spec,
    validateRequests: true,
    // validateResponses: true,
  }),
);
// End Open Api Validator

// Error handling
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
};
app.use(errorHandler);

// Routes
// app.use('/', router);
app.use('/v1/', router);

const port = process.env.PORT || 69;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;