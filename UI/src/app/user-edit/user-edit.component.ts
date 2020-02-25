import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})


export class UserEditComponent implements OnInit {
  angForm: FormGroup;
  user: any = {};

  states: any = ['Maharashtra', 'Gujrat', 'Rajstan', 'Delhi'];
  countries: any = ['India'];
  constructor(private route: ActivatedRoute, private router: Router, private ps: UsersService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      Gender: ['male', [Validators.required]],
      Email: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', [Validators.required]],
      Country: ['', Validators.required]
    });
  }
  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log("Params Id is:", params['id']);
      this.ps.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

  updateUser() {
    console.log('Form values:', this.angForm.value);
    let { Name, Gender, Email, Address, City, State, Country } = this.angForm.value;
    console.log('Name:', Name);


    this.route.params.subscribe(params => {
      this.ps.updateUser(Name, Gender, Email, Address, City, State, Country, params.id);
      this.router.navigate(['users']);
    });

  }
 
}  