import { Request } from "express";
import { UserFields } from "../db/models/User";

export interface RequestWithToken extends Request {
  token?: string;
}

export type RequestArtistAll = RequestWithToken & {
  data?: {
    user?: UserFields;
    artist?: UserFields;
  };
};
