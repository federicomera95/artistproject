import 'dotenv/config';

/* Base */
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

/* API routes */
import apiRoute from './routes/index';

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

app.get('/', (req: Request, res: Response) => {
	res.send('Server running');
});

app.use('/api', apiRoute);

app.listen(PORT, () => console.log(`⚡️[server]: Server running on http://localhost:${PORT}`));
