import { Component, OnInit } from '@angular/core';
import { UserformService } from '../service/userform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  users: any[] =[];

  constructor(private userService: UserformService, private router: Router){}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users)
  }

  addUser(){
    this.router.navigate(['/userform'])
  }

}
