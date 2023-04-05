import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

import { User } from "../db";
import { AccountType, UserFields } from "../db/models/User";

import { RequestArtistAll, TokenPayload } from "../types";

const isAuthenticated = async (
  req: RequestArtistAll,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = jwt.verify(req.token!, process.env.PRIVATE_KEY!);

    const { email, role, publicKey } = token as TokenPayload;

    const user = (await User.findOne({
      email,
      publicKey,
    })) as UserFields;

    if (
      user.email !== email ||
      user.publicKey !== publicKey ||
      user.type !== role
    )
      return res.status(401).json({ msg: "Unauthorized" });

    switch (role as AccountType) {
      case AccountType.Artist:
        req.data = {
          artist: user,
        };

        return next();

      case AccountType.User:
        req.data = {
          user: user,
        };
        return next();
    }
  } catch (err) {
    res.status(401).json({ msg: "here" });
  }
};

export default isAuthenticated;
