import { NextFunction, Response } from 'express';
import Joi from 'joi';
import { RequestWithToken } from '../types';

const requireToken = async (req: RequestWithToken, res: Response, next: NextFunction) => {
	try {
		const _token = req.headers['authorization'];

		// Joi validation
		const JoiSchema = Joi.string().required();
		const token = await JoiSchema.validateAsync(_token);

		const isBearer = token.split(' ')[0] === 'Bearer';

		if (!isBearer) return res.status(400).json({ msg: 'Invalid credentials' });

		req.token = token.split(' ')[1];
	} catch (err) {
		res.status(400).json({ msg: 'Invalid credentials' });
	}
};

export default requireToken;
