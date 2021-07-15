import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  public doRegistration(user) {
    return this.http.post("http://localhost:8080/createUser", user, {responseType:'json'});
  }

  
  public getUsers(userId) {
    return this.http.get("http://localhost:8080/getUserDetails"+userId);
  }
  public deleteUser(userId) {
    return this.http.delete("http://localhost:8080/deleteUser"+userId);
  }

  public updateUser(user) {
    return this.http.put("http://localhost:8080/updateUser", user, {responseType: 'json'});
  }
}
