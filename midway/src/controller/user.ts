import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
// import { UserService } from '../service/user.service';
import { JwtService } from '@midwayjs/jwt';
// import { IUserOptions } from '../interface';
import { UserLoginDTO } from '../dto/user.dto';
import { Validate } from '@midwayjs/validate';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  // @Inject()
  // userService: UserService;

  @Inject()
  jwt: JwtService;

  @Post('/user/login')
  @Validate()
  async getUser(@Body() user: UserLoginDTO) {
    // const result = await this.userService.getUser(user);
    const token = await this.jwt.sign({ msg: 'Hello Midway' });
    return {
      success: true,
      result: 'success',
      message: '登录成功',
      data: {
        token: token,
      },
      request: user,
    };
  }
}
