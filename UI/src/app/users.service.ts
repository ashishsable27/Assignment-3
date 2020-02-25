import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uri = 'http://localhost:4000/users';
  constructor(private http: HttpClient) { }
  addUser(Name, Gender, Email, Address, City, State, Country,HobbyString) {
    console.log(Name, Gender, Email, Address, City, State, Country,HobbyString);
    const obj = {
      Name, Gender, Email, Address, City, State, Country,HobbyString
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getUsers() {
    return this
      .http
      .get(`${this.uri}`);
  }
  editUser(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  updateUser(Name, Gender, Email, Address, City, State, Country, id) {
    const obj = {
      Name, Gender, Email, Address, City, State, Country
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteUser(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}  