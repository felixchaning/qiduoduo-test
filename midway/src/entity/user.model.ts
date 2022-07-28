import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

export class UserModel {
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async getUserByUsernameAndPassword(username, password): Promise<UserEntity> {
    return {
      id: 0,
      username: '',
      password: password,
    };
    //
  }
}
