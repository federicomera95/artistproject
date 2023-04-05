import { Response, Router } from "express";
import { RequestArtistAll } from "../types";
import { User } from "../db";
import { UserFields } from "../db/models/User";

const router = Router();

router.get("/:user", async (req: RequestArtistAll, res: Response) => {
  const { user } = req.params;

  const artist = (await User.findOne(
    { username: user },
    "-__v -_id -password -publicKey -email -type"
  ).lean()) as UserFields;

  if (!artist || artist.type !== "artist") return res.sendStatus(404);

  res.status(203).json(artist);
});

export default router;
