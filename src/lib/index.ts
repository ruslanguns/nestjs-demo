import bcrypt from 'bcrypt';
import { Request } from 'express';
import { SALT_ROUND } from './constants';

export interface IRequestContext {
  req: Request;
}

export async function hashPassword(pwd: string): Promise<string> {
  try {
    return await bcrypt.hash(pwd, parseInt(SALT_ROUND,10));
  } catch (err) {
    throw new Error(err);
  }
}

export async function comparePassword(
  pwd: string,
  pwdHash: string,
): Promise<boolean> {
  try {
    return await bcrypt.compare(pwd, pwdHash);
  } catch (err) {
    throw new Error(err);
  }
}
