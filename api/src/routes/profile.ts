import { Response, Router } from "express";
import { RequestArtistAll } from "../types";
import { User } from "../db";
import { UserFields } from "../db/models/User";
import Joi, { ValidationError } from "joi";
import { email, handleErrors, phone } from "../utilities";

const router = Router();

router.get("/:user", async (req: RequestArtistAll, res: Response) => {
  const { user } = req.params;

  const artist = (await User.findOne(
    { username: user, type: "artist" },
    "-__v -_id -password -publicKey -email -type"
  ).lean()) as UserFields;

  if (!artist) return res.sendStatus(404);

  res.status(203).json(artist);
});

router.put("/", async (req: RequestArtistAll, res: Response) => {
  try {
    //get artist user from middleware
    const artist = req.data!.artist as UserFields;

    const JoiSchema = Joi.object().keys({
      username: Joi.string().required(),
      bio: Joi.string(),
      city: Joi.string().required(),
      age: Joi.number().required(),
    });

    // Validate request body
    const data = await JoiSchema.validateAsync(req.body);
  } catch (error) {
    return res.sendStatus(404);
  }
});

router.put("/links", async (req: RequestArtistAll, res: Response) => {
  try {
    //get artist user from middleware
    const artist = req.data!.artist as UserFields;

    const JoiSchema = Joi.object()
      .keys({
        spotify: Joi.string().optional().allow(""),
        instagram: Joi.string().optional().allow(""),
        facebook: Joi.string().optional().allow(""),
        tiktok: Joi.string().optional().allow(""),
        youtube: Joi.string().optional().allow(""),
        applemusic: Joi.string().optional().allow(""),
        amazonmusic: Joi.string().optional().allow(""),
        email: Joi.string().optional().allow("").pattern(email),
        phone: Joi.string().optional().allow("").pattern(phone),
      })
      .length(9);

    // Validate request body
    const data = await JoiSchema.validateAsync(req.body);

    const { info } = artist;

    info.links = data;

    await artist.save();

    res.status(200).json({ msg: "Informations modified" });
  } catch (error) {
    handleErrors(error as ValidationError, res);
  }
});

export default router;
