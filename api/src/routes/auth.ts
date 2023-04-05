import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import Joi from "joi";
import { User } from "../db";
import { UserFields } from "../db/models/User";
import isAuthenticated from "../middleware/auth";
import { RequestArtistAll, TokenPayload } from "../types";
import requireToken from "../middleware/requireToken";

const router = Router();

router.post("/signin", async (req: Request, res: Response) => {
  try {
    const JoiSchema = Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
      type: Joi.string().required(),
      username: Joi.string().required(),
    });

    // Validate request body
    const data = await JoiSchema.validateAsync(req.body);

    // User already exists
    const existingUser = await User.findOne({
      email: data.email,
      username: data.username,
    }).lean();
    if (existingUser)
      return res.status(400).json({ msg: "Credenziali non valide!" });

    // Create a new user
    const { email, type, publicKey }: UserFields = await User.create({
      ...data,
    });

    const token = jwt.sign(
      { email, role: type, publicKey } as TokenPayload,
      process.env.PRIVATE_KEY!
    );

    return res.status(201).json({ token });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ msg: `${err.name}: ${err.message}` });
  }
});

router.put("/login", async (req: Request, res: Response) => {
  try {
    const JoiSchema = Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });

    // Validate request body
    const data = await JoiSchema.validateAsync(req.body);

    // Check if the user exists
    const user: UserFields | null = await User.findOne({ email: data.email });
    if (!user) return res.status(400).json({ msg: "Email non valida" });

    if (data.password !== user.password)
      return res.status(400).json({ msg: "Invalid password" });

    const { email, publicKey, type } = user;

    const token = jwt.sign(
      { email, publicKey, role: type },
      process.env.PRIVATE_KEY!
    );

    return res.status(200).json({ token });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ msg: `${err.name}: ${err.message}` });
  }
});

router.get(
  "/me",
  requireToken,
  isAuthenticated,
  async (req: RequestArtistAll, res: Response) => {
    res.status(200).json({ user: req.data });
  }
);

export default router;
