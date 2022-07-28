import { Rule, RuleType } from '@midwayjs/validate';
const required = RuleType.string().required();

export class UserLoginDTO {
  @Rule(required)
  username: string;
  //
  @Rule(required)
  password: string;
}
