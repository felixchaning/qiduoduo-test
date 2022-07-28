import { Provide } from '@midwayjs/decorator';
import { UserOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  async getUser(options: UserOptions) {
    const all = await this.userRepo.find();
    // const one = await this.userRepo.findOne({
    //   username: options.username,
    //   password: options.password,
    // });
    return {
      all: all,
      username: options.username,
    };
  }
  async saveUser(options: UserOptions) {
    const userResult = await this.userRepo.save(options);
    // save success
    console.log('user id = ', userResult.id);
    return userResult.id;
  }
}
