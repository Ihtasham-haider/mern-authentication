import express from 'express';
import dotenv from 'dotenv';
import router from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/middleware.js';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(process.env.PUBLIC_DIR));
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', router);
app.get('/', (req, res) => {
  res.send('server is working ');
});
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
