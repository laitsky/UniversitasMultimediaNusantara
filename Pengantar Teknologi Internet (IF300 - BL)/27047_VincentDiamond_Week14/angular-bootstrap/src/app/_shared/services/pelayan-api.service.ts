import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Mahasiswa } from '../models/mahasiswa';
import { MahasiswaResult } from '../models/mahasiswa-result';
@Injectable({
  providedIn: 'root'
})
export class PelayanApiService {

  private apiDocumentation = 'https://documenter.getpostman.com/view/5658787/SW7W5pjd';
  private urlApi = 'https://umn-pti2019.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllMahasiswa(): Observable<Mahasiswa> {
    return this.http.get<Mahasiswa>(`${this.urlApi}/api/mahasiswa`);
  }
  getMahasiswaByNim(nim: string): Observable<MahasiswaResult> {
    return this.http.get<MahasiswaResult>(`${this.urlApi}/api/mahasiswa/${nim}`);
  }
}
