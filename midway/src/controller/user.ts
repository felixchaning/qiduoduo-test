import { Inject, Controller, Post, Query } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { JwtService } from '@midwayjs/jwt';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  jwt: JwtService;

  @Post('/user/login')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser({ uid });
    const token = await this.jwt.sign({ msg: 'Hello Midway' });
    return {
      success: true,
      result: 'success',
      message: '登录成功',
      data: {
        user: user,
        token: token,
      }
    };
  }
}
