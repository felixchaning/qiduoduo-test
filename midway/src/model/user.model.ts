import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';
// import { UserLoginDTO } from '../dto/user.dto';

export class UserService {
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   * 不用，使用service/user.service实现
   */
  async getUserByUsernameAndPassword(username, password): Promise<UserEntity> {
    return {
      id: 0,
      username: username,
      password: password,
    };
  }
}
