import { Response } from 'express';
import { ValidationError } from 'joi';
import { Error } from 'mongoose';

export const handleErrors = (err: ValidationError | Error, res?: Response) => {
	console.log(err);

	if ('isJoi' in err && err.isJoi) {
		if (res) res.status(200).json({ msg: `JOI: ${err.details[0].message}` });
	} else {
		if (res) res.status(200).json({ msg: `${err.name}: ${err.message}` });
	}
};
