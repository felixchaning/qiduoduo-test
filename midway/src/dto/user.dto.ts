import {Rule} from "@midwayjs/validate";

class UserLoginDTO {
  @Rule(...)
  username: string;

  @Rule(...)
  password: string;
}
