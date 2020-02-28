import { Request } from 'express';
import bcrypt from 'bcrypt'
import { SALT_ROUND } from './constants';

export interface IRequestContext {
  req: Request;
}

export async function hashPassword(pwd:string){
  return await bcrypt.hash(pwd, SALT_ROUND);
}

export async function comparePassword(pwd:string, pwdHash:string){
  return await bcrypt.compare(pwd, pwdHash);
}