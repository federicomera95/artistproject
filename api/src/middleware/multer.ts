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
  audio: 0,
};

const VALID_MIME_TYPES: MimeType<string[]> = {
  image: ["image/png", "image/jpeg"],
  video: ["video/mp4"],
  audio: ["audio/mpeg", "audio/mp3"],
};

const multerCallback = (
  type: keyof MimeType<string[] | number>,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
) => {
  if (VALID_MIME_TYPES[type].includes(file.mimetype)) {
    return callback(null, true);
  } else {
    callback(new Error("Error: The uploaded file must be specific type."));
  }
};

const fileFilter: multer.Options["fileFilter"] = (req, file, callback) => {
  multerCallback("image", file, callback);
};

export const multerOptions = (type: keyof MimeType<string[] | number>) => {
  return {
    fileFilter,
    limits: { fileSize: MAX_SIZE_IN_MEGABYTES[type] },
  };
};

export const initMulterMiddleware = (
  type: keyof MimeType<string[] | number>
) => {
  return multer({ storage, ...multerOptions(type) });
};
