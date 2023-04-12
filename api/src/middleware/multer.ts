import multer, { Options } from "multer";
import { randomUUID } from "crypto";

import mime from "mime";
import { MimeType } from "../types";
import { Request } from "express";

export const generateFileName = (mimeType: string) => {
  const randomFileName = `${randomUUID()}-${Date.now()}`;
  const fileExtension = mime.getExtension(mimeType);
  const fileName = `${randomFileName}.${fileExtension}`;

  return fileName;
};

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, callback) => {
    return callback(null, generateFileName(file.mimetype));
  },
});

const MAX_SIZE_IN_MEGABYTES: MimeType<number> = {
  image: 6 * 1024 * 1024,
  video: 0,
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
      _: any,
      file: Express.Multer.File,
      callback: multer.FileFilterCallback
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

export const initMulterMiddleware = (
  type: keyof MimeType<string[] | number>,
  type2?: keyof MimeType<string[] | number>
) => {
  return multer({ storage, ...multerOptions(type, type2) });
};
