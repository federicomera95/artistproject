import { AccountType } from '../db/models/User';

export interface TokenPayload {
	email: string;
	type: AccountType;
	publicKey: string;
	username: string;
}

export interface BaseData {
	email: string;
	password: string;
}

export interface Data {
	email?: string;
	password?: string;
	username?: string;
}

export * from './auth';
