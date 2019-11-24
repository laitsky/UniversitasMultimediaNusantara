import { Component, OnInit } from '@angular/core';
import { PelayanService } from '../_shared/services/pelayan.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_shared/models/user';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user: User = null;
  constructor(private pelayan: PelayanService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {this.user = this.pelayan.getUserByNim(params.nim);});
  }

}
