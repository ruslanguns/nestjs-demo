import { HttpExceptionFilter } from './http-exception';

describe('HttpException', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});
