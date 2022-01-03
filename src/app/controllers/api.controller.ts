import {
  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,
  HttpResponseNotFound, HttpResponseOK, Post
} from '@foal/core';

import { Todo } from '../entities';

export class ApiController {

  @Get('/todos')
  async getTodos() {
    const todos = await Todo.find();
    return new HttpResponseOK(todos);
  }

}
