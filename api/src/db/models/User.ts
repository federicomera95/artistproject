import { Document, Schema, model } from 'mongoose';
const { String, Number, Boolean } = Schema.Types;

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
	isLogged: boolean;
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
		username: emptyString,
		isLogged: {
			type: Boolean,
			default: true
		},
		type: {
			type: String,
			required: true
		},
		info: {
			avatar: emptyString,
			bio: emptyString,
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
