import express, { Response, Router } from 'express';
import { RequestArtistAll } from '../types';
import { User } from '../db';
import { UserFields } from '../db/models/User';
import Joi, { ValidationError } from 'joi';
import { email, handleErrors, phone } from '../utilities';
import { initMulter } from '../middleware/multer';

const uploadPhoto = initMulter('image');
const uploadMultiAudio = initMulter('audio', 'image');
const uploadMultiVideo = initMulter('video', 'image');

const router = Router();

router.get('/:user', async (req: RequestArtistAll, res: Response) => {
	const { user } = req.params;

	const artist = (await User.findOne(
		{ username: user, type: 'artist' },
		'-__v -_id -password -publicKey -email -type'
	).lean()) as UserFields;

	if (!artist) return res.sendStatus(404);

	res.status(203).json(artist);
});

router.put('/', uploadPhoto.single('avatar'), async (req: RequestArtistAll, res: Response) => {
	try {
		//get artist user from middleware
		const artist = req.data!.artist as UserFields;

		const JoiSchema = Joi.object().keys({
			username: Joi.string().required(),
			bio: Joi.string().optional().allow(''),
			avatar: Joi.object().optional().allow(''),
			city: Joi.string().required(),
			age: Joi.number().required(),
			gender: Joi.string().required()
		});

		// Validate request body
		const data = await JoiSchema.validateAsync(req.body);

		artist.username = data.username;
		artist.info.bio = data.bio;
		artist.info.city = data.city;
		artist.info.age = data.age;
		artist.info.gender = data.gender;
		if (req.file) {
			artist.info.avatar = req.file.filename;
		}

		await artist.save();

		res.status(200).json({ msg: 'Profile modified' });
	} catch (error) {
		handleErrors(error as ValidationError, res);
	}
});

router.put('/links', async (req: RequestArtistAll, res: Response) => {
	try {
		//get artist user from middleware
		const artist = req.data!.artist as UserFields;

		const JoiSchema = Joi.object()
			.keys({
				spotify: Joi.string().optional().allow(''),
				instagram: Joi.string().optional().allow(''),
				facebook: Joi.string().optional().allow(''),
				tiktok: Joi.string().optional().allow(''),
				youtube: Joi.string().optional().allow(''),
				applemusic: Joi.string().optional().allow(''),
				amazonmusic: Joi.string().optional().allow(''),
				email: Joi.string().optional().allow('').pattern(email),
				phone: Joi.string().optional().allow('').pattern(phone)
			})
			.length(9);

		// Validate request body
		const data = await JoiSchema.validateAsync(req.body);

		const { info } = artist;

		info.links = data;

		await artist.save();

		res.status(200).json({ msg: 'Informations modified' });
	} catch (error) {
		handleErrors(error as ValidationError, res);
	}
});

router.post(
	'/add-audio',
	uploadMultiAudio.fields([
		{ name: 'audio', maxCount: 1 },
		{ name: 'thumbnail', maxCount: 1 }
	]),
	async (req: RequestArtistAll, res: Response) => {
		try {
			//get artist user from middleware
			const artist = req.data!.artist as UserFields;

			const JoiSchema = Joi.object().keys({
				title: Joi.string().required(),
				description: Joi.string().required(),
				instruments: Joi.array().optional().allow(''),
				genres: Joi.array().optional().allow('')
			});

			// // Validate request body
			const data = await JoiSchema.validateAsync(req.body);

			data.type = 'audio';
			const files = req.files as any;

			data.file = files.audio[0].filename;
			data.thumbnail = files.thumbnail[0].filename;

			artist.contents.push(data);
			await artist.save();
			res.status(200).json({ msg: 'Content audio created' });
		} catch (error) {
			handleErrors(error as ValidationError, res);
		}
	}
);
router.post(
	'/add-video',
	uploadMultiVideo.fields([
		{ name: 'video', maxCount: 1 },
		{ name: 'thumbnail', maxCount: 1 }
	]),
	async (req: RequestArtistAll, res: Response) => {
		try {
			//get artist user from middleware
			const artist = req.data!.artist as UserFields;

			const JoiSchema = Joi.object().keys({
				title: Joi.string().required(),
				description: Joi.string().required(),
				instruments: Joi.array().optional().allow(''),
				genres: Joi.array().optional().allow('')
			});

			// // Validate request body
			const data = await JoiSchema.validateAsync(req.body);

			data.type = 'video';
			const files = req.files as any;

			data.file = files.video[0].filename;
			data.thumbnail = files.thumbnail[0].filename;
			artist.contents.push(data);
			await artist.save();
			res.status(200).json({ msg: 'Content audio created' });
		} catch (error) {
			handleErrors(error as ValidationError, res);
		}
	}
);
router.post(
	'/add-photo',
	uploadPhoto.single('photo'),
	async (req: RequestArtistAll, res: Response) => {
		try {
			//get artist user from middleware
			const artist = req.data!.artist as UserFields;

			const JoiSchema = Joi.object().keys({
				title: Joi.string().required(),
				description: Joi.string().required(),
				instruments: Joi.array().optional().allow(''),
				genres: Joi.array().optional().allow('')
			});

			// // Validate request body
			const data = await JoiSchema.validateAsync(req.body);

			data.type = 'photo';
			data.file = req.file?.filename;

			artist.contents.push(data);
			await artist.save();
			res.status(200).json({ msg: 'Content photo created' });
		} catch (error) {
			handleErrors(error as ValidationError, res);
		}
	}
);

export default router;
