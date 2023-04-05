import { Request, Response, Router } from 'express';
import Joi from 'joi';
import { User } from '../db';
import { AccountType, UserFields } from '../db/models/User';

const router = Router();

router.post('/signin', async (req: Request, res: Response) => {
	try {
		const JoiSchema = Joi.object().keys({
			email: Joi.string().required(),
			password: Joi.string().required(),
			type: Joi.string().required(),
			username: Joi.string()
		});

		// Validate request body
		const data = await JoiSchema.validateAsync(req.body);

		if (data.type === AccountType.Artist && !data.username)
			return res.status(400).json({ msg: 'Username is required with an artist account' });

		// User already exists
		const existingUser = await User.findOne({ email: data.email }).lean();
		if (existingUser) return res.status(400).json({ msg: 'Email non valida' });

		// Create a new user
		const { email, type }: UserFields = await User.create({ ...data });

		return res.status(201).json({ email, type });
	} catch (err: any) {
		console.log(err);
		res.status(500).json({ msg: `${err.name}: ${err.message}` });
	}
});

router.put('/login', async (req: Request, res: Response) => {
	try {
		const JoiSchema = Joi.object().keys({
			email: Joi.string().required(),
			password: Joi.string().required()
		});

		// Validate request body
		const data = await JoiSchema.validateAsync(req.body);

		// Check if the user exists
		const user: UserFields | null = await User.findOne({ email: data.email });
		if (!user) return res.status(400).json({ msg: 'Email non valida' });

		if (data.password !== user.password)
			return res.status(400).json({ msg: 'Invalid password' });

		if (!user.isLogged) {
			user.isLogged = true;
			await user.save();
		}

		return res.status(200).json({ email: user.email, type: user.type });
	} catch (err: any) {
		console.log(err);
		res.status(500).json({ msg: `${err.name}: ${err.message}` });
	}
});

router.put('/logout', async (req: Request, res: Response) => {
	try {
		const JoiSchema = Joi.object().keys({
			email: Joi.string().required()
		});

		// Validate request body
		const { email } = await JoiSchema.validateAsync(req.body);

		// Check if the user exists
		const user: UserFields | null = await User.findOne({ email });
		if (!user) return res.status(400).json({ msg: 'Email non valida' });

		if (user.isLogged) {
			user.isLogged = false;
			await user.save();
		}

		return res.status(200).json({ msg: 'User logout' });
	} catch (err: any) {
		console.log(err);
		res.status(500).json({ msg: `${err.name}: ${err.message}` });
	}
});

router.get('/me', async (req: Request, res: Response) => {
	try {
		const token = req.headers['token'] as string;

		if (!token) return res.status(400).json({ msg: 'Token is required' });

		const JoiSchema = Joi.object().keys({
			email: Joi.string().required(),
			type: Joi.string().required()
		});

		// Validate request body
		const { email, type } = await JoiSchema.validateAsync(JSON.parse(token));

		// Check if the user exists
		const user: UserFields | null = await User.findOne({ email, type });
		if (!user) return res.status(400).json({ msg: 'Token non valido' });

		// Return a response based on the login state
		if (user.isLogged) {
			return res.sendStatus(200);
		} else {
			return res.sendStatus(401);
		}
	} catch (err: any) {
		console.log(err);
		res.status(500).json({ msg: `${err.name}: ${err.message}` });
	}
});

export default router;
