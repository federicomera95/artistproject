import 'dotenv/config';

/* Base */
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

/* API routes */
import apiRoute from './routes/index';
import { connect } from './db';

const app: Express = express();
const PORT = process.env.PORT!;

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.send('Server running');
});

app.use('/api', apiRoute);

connect();

app.listen(PORT, () => console.log(`⚡️[server]: Server running on http://localhost:${PORT}`));
