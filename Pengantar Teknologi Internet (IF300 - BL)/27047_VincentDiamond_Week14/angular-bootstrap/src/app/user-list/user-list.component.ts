import { Component, OnInit } from '@angular/core';
import { User } from '../_shared/models/user';
import { PelayanService } from '../_shared/services/pelayan.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: User[] = [];
  constructor(private pelayan: PelayanService) { }

  ngOnInit() {
    this.users = this.pelayan.getAllUsers();
  }

}
