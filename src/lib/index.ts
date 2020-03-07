import bcrypt from 'bcrypt';
import { Validator } from 'class-validator';
import { Request } from 'express';
import { SALT_ROUND } from './constants';
import { NotFoundException } from '@nestjs/common';

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

export function notFound(msg:string){
  throw new NotFoundException(msg)
}

// for non async validation  
function validate(){
  return new Validator();
}

export function isUUID(id:string){
  return validate().isString(id) && validate().isUUID(id);
}
export function isStrAndDefined(str:string){
  return validate().isString(str) && validate().isDefined(str)
}