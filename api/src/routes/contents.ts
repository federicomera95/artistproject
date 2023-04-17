import { Router } from 'express';
import { User } from '../db';
import { ContentFields, GenderType, UserFields } from '../db/models/User';
import { ContentType } from '../db/models/User';
import { string } from 'joi';
import shuffle from '../utilities/shuffle';

const router = Router();

interface ContentResponse {
	username: string;
	avatar: string;
	contents: ContentFields[];
}

const formatGender = (gender: boolean[]): string[] => {
	const out: GenderType[] = [];

	if (gender[0]) out.push(GenderType.Man);
	else out.push(GenderType.Unset);

	if (gender[1]) out.push(GenderType.Woman);
	else out.push(GenderType.Unset);

	if (gender[2]) out.push(GenderType.Other);
	else out.push(GenderType.Unset);

	return out;
};

const formatContentType = (type: boolean[]): string[] => {
	const out: string[] = [];

	if (type[0]) out.push(ContentType.Photo);
	else out.push('');

	if (type[1]) out.push(ContentType.Video);
	else out.push('');

	if (type[2]) out.push(ContentType.Audio);
	else out.push('');

	return out;
};

router.get('/home', async (req, res) => {
	const users = await User.find({}, '-__v -_id -publicKey -password -email -type').lean();

	const profiles = users
		.filter((u) => u.contents.length > 0)
		.map((u) => ({
			username: u.username,
			avatar: u.info.avatar
		}));

	const contents = [];

	for (const user of users) {
		contents.push(
			...user.contents.map((c) => ({
				...c,
				username: user.username,
				avatar: user.info.avatar
			}))
		);
	}

	res.status(200).json([shuffle(profiles), shuffle(contents)]);
});

router.put('/filter', async (req, res) => {
	const { city, search, rangeAge, gender, type, genres, instruments } = req.body;

	const users = await User.find({}, '-__v -_id -publicKey -password -email -type').lean();

	const filteredUsers: UserFields[] = users
		.filter((u) => {
			if (search !== '') return u.username.toLowerCase().includes(search.toLowerCase());
			return true;
		})
		.filter((u) => {
			if (city !== 'seleziona una città') return u.info.city === city;
			return true;
		})
		.filter((u) => {
			if (u.info.age) {
				if (u.info.age >= rangeAge[0] && u.info.age <= rangeAge[1]) return true;
				return false;
			}
			return true;
		})
		.filter((u) => {
			if (u.info.gender && gender.includes(true)) {
				if (formatGender(gender).includes(u.info.gender.toLowerCase())) return true;
				return false;
			}
			return true;
		});

	const filteredContents: ContentResponse[] = filteredUsers
		.map((u) => ({
			username: u.username,
			avatar: u.info.avatar,
			contents: u.contents
				.filter((c) => {
					if (!type.includes(true)) return true;
					return formatContentType(type).includes(c.type);
				})
				.filter((c) => {
					if (!genres.length) return true;
					return c.genres?.some((g) =>
						genres.map((gen: string) => gen.toLowerCase()).includes(g?.toLowerCase())
					);
				})
				.filter((c) => {
					if (!instruments.length) return true;
					return c.instruments?.some((i) =>
						instruments
							.map((ins: string) => ins.toLowerCase())
							.includes(i?.toLowerCase())
					);
				})
		}))
		.filter((uc) => uc.contents.length);

	res.status(200).json(shuffle(filteredContents));
});

router.get('/explore', async (req, res) => {
	const users = await User.find({}, '-__v -_id -publicKey -password -email -type').lean();

	const contents: ContentResponse[] = users.map((u) => ({
		username: u.username,
		avatar: u.info.avatar,
		contents: u.contents
	}));

	res.status(200).json(shuffle(contents));
});

export default router;
