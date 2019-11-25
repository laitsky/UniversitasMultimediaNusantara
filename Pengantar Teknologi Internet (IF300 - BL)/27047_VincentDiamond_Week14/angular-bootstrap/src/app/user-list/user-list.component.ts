import { Component, OnInit } from '@angular/core';
import { User } from '../_shared/models/user';
import { PelayanService } from '../_shared/services/pelayan.service';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { Mahasiswa } from '../_shared/models/mahasiswa';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //private users: User[] = [];
  public mahasiswa: Mahasiswa = null;
  constructor(private pelayanApi: PelayanApiService) { }

  ngOnInit() {
    this.pelayanApi.getAllMahasiswa().subscribe(
      result => {this.mahasiswa = result;}, 
      error => {console.log(error);}
      );
  }

}
