import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user: any
  constructor() { }
  setUser(user: any): void {
    this.user = user
  }
  getUser(): any {
    return this.user
  }
}
