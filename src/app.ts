import express, { ErrorRequestHandler } from 'express';
import dotenv from "dotenv";

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import router from './routes';
import * as OpenApiValidator from 'express-openapi-validator';

dotenv.config();

const app = express();
const path = require('path');

app.use(express.json()); 
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

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

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // format error
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