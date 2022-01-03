import { Get, HttpResponseOK } from '@foal/core';

export class ApiController {

  @Get('/todos')
  getTodos() {
    const todos = [
      { id: 1, text: 'My task 1' },
      { id: 2, text: 'My task 2' }
    ];
    return new HttpResponseOK(todos);
  }

}
