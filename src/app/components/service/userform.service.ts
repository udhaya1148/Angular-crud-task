import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserformService {

  private users: any[] = [];

  getUsers(){
    return this.users;

  }

  addUser(user: any){
    this.users.push(user);
  }
  constructor() { }
}
