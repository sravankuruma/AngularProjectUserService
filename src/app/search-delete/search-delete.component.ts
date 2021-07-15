import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users: any; 
  userId: number;
  constructor(private service : UserRegistrationService) { }

  ngOnInit(): void {
  }

  public searchUser() {
    let response = this.service.getUsers(this.userId);
    response.subscribe((data)=>this.users=data);
  }

  public deleteUser(id:number) {
    let response = this.service.deleteUser(id);
    response.subscribe((data)=>this.users=data);
  }
}
