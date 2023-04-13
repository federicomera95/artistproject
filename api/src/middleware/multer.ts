import path from "path";
import multer from "multer";
import { randomUUID } from "crypto";

import { MimeType } from "../types";
import { Request } from "express";
import { FileFilterCallback } from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../../files"));
  },
  filename: (req, file, callback) => {
    const fileName = `${randomUUID()}-${Date.now()}${path.extname(
      file.originalname
    )}`;

    callback(null, fileName);
  },
});

const MAX_SIZE_IN_MEGABYTES: MimeType<number> = {
  image: 6 * 1024 * 1024,
  video: 20 * 1024 * 1024,
  audio: 10 * 1024 * 1024,
};

const VALID_MIME_TYPES: MimeType<string[]> = {
  image: ["image/png", "image/jpeg"],
  video: ["video/mp4"],
  audio: ["audio/mpeg", "audio/mp3"],
};

export const multerOptions = (
  type: keyof MimeType<string[] | number>,
  type2?: keyof MimeType<string[] | number>
) => {
  return {
    fileFilter: (
      _: Request,
      file: Express.Multer.File,
      callback: FileFilterCallback
    ) => {
      if (type2) {
        if (
          VALID_MIME_TYPES[type].includes(file.mimetype) ||
          VALID_MIME_TYPES[type2].includes(file.mimetype)
        ) {
          return callback(null, true);
        } else {
          callback(null, false);
        }
      } else {
        if (VALID_MIME_TYPES[type].includes(file.mimetype)) {
          return callback(null, true);
        } else {
          callback(null, false);
        }
      }
    },
    limits: { fileSize: MAX_SIZE_IN_MEGABYTES[type] },
  };
};

export const initMulter = (
  type: keyof MimeType<string[] | number>,
  type2?: keyof MimeType<string[] | number>
) => {
  return multer({ storage, ...multerOptions(type, type2) });
};
