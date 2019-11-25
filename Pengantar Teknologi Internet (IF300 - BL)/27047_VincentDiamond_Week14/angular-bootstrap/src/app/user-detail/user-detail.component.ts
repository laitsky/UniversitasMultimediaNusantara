import { Component, OnInit } from '@angular/core';
import { PelayanService } from '../_shared/services/pelayan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_shared/models/user';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { Mahasiswa } from '../_shared/models/mahasiswa';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public mahasiswa: Mahasiswa;
  currentNIM: string;
  constructor(private pelayan: PelayanApiService, 
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentNIM = this.activatedRoute.snapshot.paramMap.get("nim");
    this.pelayan.getMahasiswaByNim(this.currentNIM).subscribe(result => { this.mahasiswa = result; });
  }

}
