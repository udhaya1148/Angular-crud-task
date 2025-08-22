import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserformService {
  private idCounter = 1; //auto increment

  private users: any[] = [];

  getUsers(){
    return this.users;

  }

  addUser(user: any){
    user.id = this.idCounter++  //assign unique id
    this.users.push(user);
  }

  editUser(editedUser: any){
    this.users = this.users.map(u => u.id === editedUser.id?{...u, ...editedUser}: u);
  }

  //delete user by id
  deleteUser(id: number){
    this.users = this.users.filter(u => u.id != id)
  }

  // delete using index
  // deleteUser(index: number){
  //   this.users.splice(index,1);
  // }
  constructor() { }
}
