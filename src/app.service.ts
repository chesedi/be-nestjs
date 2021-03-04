import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getUser(): string {
    return 'Hello World!';
  }

  postUser(): string {
    return 'post succeeded';
  }
}
