import { AccountType } from "../db/models/User";

export interface TokenPayload {
  _id: number;
  email: string;
  role: AccountType;
  publicKey: string;
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

export * from "./auth";
