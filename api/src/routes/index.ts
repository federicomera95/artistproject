import { Router, Request, Response } from 'express';

import auth from './auth';
import profile from './profile';
import search from './search';
import isAuthenticated from '../middleware/auth';
import requireToken from '../middleware/requireToken';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('Api route');
});

router.use('/auth', auth);
router.use('/profile', requireToken, isAuthenticated, profile);
router.use('/search', requireToken, isAuthenticated, search);

export default router;
