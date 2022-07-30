import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('test/controller/user.test.ts', () => {

  let app: Application;

  beforeAll(async () => {
    // 只创建一次 app，可以复用
    try {
      // 由于Jest在BeforeAll阶段的error会忽略，所以需要包一层catch
      // refs: https://github.com/facebook/jest/issues/8688
      app = await createApp<Framework>();
    } catch(err) {
      console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    // close app
    await close(app);
  });

  // 正常登录测试
  it('should POST /api/user/login', async () => {
    const start = new Date().getTime()
    // make request
    const result = await createHttpRequest(app).post('/api/user/login').send(
      {
        "username": "abc",
        "password": "123"
      }
    );

    const end = new Date().getTime()
    // 3. 如果接口请求时间超过1秒钟，则Assert断言失败
    expect(end - start).toBeLessThan(1000);
    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.message).toBe('登录成功');
    //  4. 如果接口返回值格式不正确，则Assert断言失败
    const schema = {
      "code": "number",
      "result": "string",
      "message": "string"
    }
    for (let key in schema) {
      // 键存在且值类型正确
      expect(result.body[key]).toBeDefined()
      expect(typeof result.body[key]).toBe(schema[key])
    }
  });

  // 异常登录测试
  it('should POST /api/user/login', async () => {
    // make request
    const result = await createHttpRequest(app).post('/api/user/login').send(
      {
        "username": "xxx",
        "password": "321"
      }
    );

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.code).toBe(400);
    expect(result.body.message).toBe('账号或密码不正确');
  });

  // 异常登录测试
  it('should POST /api/user/login', async () => {
    // make request
    const result = await createHttpRequest(app).post('/api/user/login').send(
      {
        "username": "xxx",
        "password": ""
      }
    );

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.status).toBe(422);
    expect(result.body.message).toBe('校验参数错误,\"password\" is not allowed to be empty');
  });
});
