import crypto from 'crypto';
import { Document, Schema, model } from 'mongoose';
const { String, Number } = Schema.Types;

const emptyString = {
	type: String,
	default: ''
};

export enum AccountType {
	User = 'user',
	Artist = 'artist'
}

export enum ContentType {
	Photo = 'photo',
	Audio = 'audio',
	Video = 'video'
}

export interface ContentFields {
	type: ContentType;
	title: string;
	description: string;
	file: string;
	thumbnail: string;
	tags: string[];
}

export interface UserFields extends Document {
	email: string;
	password: string;
	username: string;
	publicKey: string;
	type: AccountType;
	info: {
		avatar: string;
		bio: string;
		age: number;
		city: string;
		followers: string[];
		links: {
			[key: string]: string;
		};
	};
	contents: ContentFields[];
}

const UserSchema = new Schema<UserFields>(
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		publicKey: {
			type: String,
			default: crypto.randomBytes(32).toString('hex')
		},
		username: {
			type: String,
			unique: true,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		info: {
			avatar: emptyString,
			bio: {
				type: String,
				default: 'Default bio'
			},
			age: {
				type: Number
			},
			city: emptyString,
			followers: [String],
			links: {
				spotify: emptyString,
				instagram: emptyString,
				facebook: emptyString,
				tiktok: emptyString,
				youtube: emptyString,
				applemusic: emptyString,
				amazonmusic: emptyString,
				email: emptyString,
				phone: emptyString
			}
		},
		contents: [{}]
	},
	{
		strict: true
	}
);

export default model<UserFields>('User', UserSchema);
