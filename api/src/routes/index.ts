import { Router, Request, Response } from 'express';

import auth from './auth';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('Api route');
});

router.use('/auth', auth);

export default router;
