import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { MahasiswaResult } from '../_shared/models/mahasiswa-result';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public mahasiswa: MahasiswaResult;
  currentNIM: string;
  constructor(private pelayan: PelayanApiService, 
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentNIM = this.activatedRoute.snapshot.paramMap.get("nim");
    this.pelayan.getMahasiswaByNim(this.currentNIM).subscribe(result => {this.mahasiswa = result.result; console.log(this.mahasiswa)});
  }

}
