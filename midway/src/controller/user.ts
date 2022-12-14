import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { JwtService } from '@midwayjs/jwt';
import { UserLoginDTO } from '../dto/user.dto';
import { Validate } from '@midwayjs/validate';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  jwt: JwtService;

  @Post('/user/login')
  @Validate()
  async getUser(@Body() user: UserLoginDTO) {
    const theUser = await this.userService.getUser(user);
    const token = await this.jwt.sign({ msg: 'Hello Midway' });
    if (theUser && theUser.length) {
      return {
        code: 200,
        result: 'success',
        message: '登录成功',
        data: {
          token: token,
        },
      };
    } else {
      return {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    }
  }

  @Post('/user/signup')
  @Validate()
  async saveUser(@Body() user: UserLoginDTO) {
    const result = await this.userService.saveUser(user);
    return {
      success: true,
      result: 'success',
      message: '注册成功',
      data: {
        id: result,
        username: user.username,
      },
    };
  }
}
