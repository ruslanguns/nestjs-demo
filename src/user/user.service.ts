import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { comparePassword, hashPassword } from 'src/lib';
import { Connection, Repository } from 'typeorm';
import { ILoginUser, User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly cnx: Connection /* Use for TRANSACTION purpose */,
  ) {}

  async addUser(user: User) {
    try {
      return await this.userRepository.save(user);
    } catch (err) {
      throw new Error(err);
    }
  }

  async signup(args: User): Promise<User | null> {
    try {
      let res: any;

      const userExists = await this.userRepository.findOne({
        where: { email: args.email },
      });

      if (userExists) {
        console.log('[userExists:]:', userExists);
        res = { id: null, data: 'User exists' };
      } else {
        // hash pwd
        args.password = await hashPassword(args.password)
        res = await this.userRepository.save(args);
      }
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }

  async authenticate(args: ILoginUser): Promise<any> {
    try {
  
      const user = await this.userRepository.findOne({
        where: [{ email: args.email }, {username: args.username}],
      });

      const confirmPwd: boolean = await comparePassword(
        args.password,
        user.password,
        );

      if (confirmPwd) {
        const {password, ...res} = user
        return res;
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async createMany(user: User[]) {
    // to use TRANSACTION, instantiate a queryRunner
    const qRunner = this.cnx.createQueryRunner();

    await qRunner.connect();
    await qRunner.startTransaction();

    try {
      await qRunner.manager.save(user[0]);
      await qRunner.manager.save(user[1]);

      await qRunner.commitTransaction();
    } catch (err) {
      // rollback trnx
      await qRunner.rollbackTransaction();
    } finally {
      // release qRunner
      await qRunner.release();
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(username?: string, id?: string): Promise<User> {
    try {
      return await this.userRepository.findOne({
        where: [{ id }, { username }],
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
