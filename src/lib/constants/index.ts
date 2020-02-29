// explicit values
export enum UserRole {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  MODERATOR= 'MODERATOR'
}

export enum UserPrivilege {
  FULL = '1',
  PARTIAL = '2',
  NEVER = '3',
}

export const SALT_ROUND = process.env.SALT_ROUND ;
export const CONFIG_OPTIONS = 'CONFIG_OPTIONS';
export const JWT_CONSTANT = {secret: process.env.JWT_CONSTANT}