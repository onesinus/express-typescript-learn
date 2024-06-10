import express from 'express';
import dotenv from "dotenv";

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import router from './routes';

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/', router);

const port = process.env.PORT || 69;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;