import { Component, OnInit } from '@angular/core';
import { UserformService } from '../service/userform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: any[] = [];
  selectedIds: number[] = [];


  constructor(private userService: UserformService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users)
  }

  addUser() {
    this.router.navigate(['/userform'])
  }

  //check box selection
  selection(id: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedIds = [...this.selectedIds, id];
    }
    else {
      this.selectedIds = this.selectedIds.filter(sid => sid !== id);
    }
  }

  editUser(){
    if(this.selectedIds.length === 1){
      const userId = this.selectedIds[0];
      this.router.navigate(['/userform'],{queryParams:{id: userId}});
    }
  }

  //delete user by id
  deleteUSer() {
    this.selectedIds.forEach(id => this.userService.deleteUser(id));
    this.selectedIds = [];
    this.users = this.userService.getUsers();
  }

  //return true or false if value is found
  isSelected(id: number): boolean {
    return this.selectedIds.includes(id);
  }


  //delete using index
  // deleteUser(index : number){
  //   this.userService.deleteUser(index);
  //   this.users = this.userService.getUsers();
  // }

}
