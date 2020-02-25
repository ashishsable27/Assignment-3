import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from "lodash";
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  angForm: FormGroup;
  states: any = ['Maharashtra', 'Gujrat', 'Rajstan', 'Delhi'];
  countries: any = ['India'];
  hobbyData = [
    { id: 1, name: 'Reading' },
    { id: 2, name: 'Cricket' },
    { id: 3, name: 'Movie' }
  ];



  constructor(private fb: FormBuilder, private router: Router, private ps: UsersService) {
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
      Country: ['', Validators.required],
      hobbies: new FormArray([])
    });

    this.addCheckboxes();
  }



  addUser() {
    console.log('Form values:', this.angForm.value);
    let { Name, Gender, Email, Address, City, State, Country } = this.angForm.value;
    console.log('Name:', Name);

    const selectedHobbies = this.angForm.value.hobbies
      .map((v, i) => v ? this.hobbyData[i].name : null)
      .filter(v => v !== null);
    console.log(selectedHobbies);

    let HobbyString = selectedHobbies.join(", ");
    this.ps.addUser(Name, Gender, Email, Address, City, State, Country, HobbyString);
    this.router.navigate(['users']);

  }


  ngOnInit() {
  }

  private addCheckboxes() {
    this.hobbyData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.angForm.controls.hobbies as FormArray).push(control);
    });
  }

} 