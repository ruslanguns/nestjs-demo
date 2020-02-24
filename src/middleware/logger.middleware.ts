import { Request, Response } from "express";

export function logger(req:Request, res:Response, next) {
  console.log(`[loggerMiddleware] Requested: ${req.url} `);
  next();
};