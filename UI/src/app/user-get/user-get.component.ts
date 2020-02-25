import { Component, OnInit } from '@angular/core';  
import User from '../User';  
import { UsersService } from '../users.service';  
@Component({  
  selector: 'app-user-get',  
  templateUrl: './user-get.component.html',  
  styleUrls: ['./user-get.component.css']  
})  
export class UserGetComponent implements OnInit {  
  users: User[];  
  constructor(private ps: UsersService) { }  
  ngOnInit() {  
    this.ps  
      .getUsers()  
      .subscribe((data: User[]) => {  
        this.users = data;  
    });  
  }
  
  deleteUser(id) {  
    this.ps.deleteUser(id).subscribe(res => {  
      this.users.splice(id, 1);  
    });  
}  
}