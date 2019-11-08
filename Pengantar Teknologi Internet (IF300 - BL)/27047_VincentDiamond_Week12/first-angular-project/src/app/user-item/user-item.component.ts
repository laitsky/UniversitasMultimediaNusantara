import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  name: string;
  nim: string;
  constructor() {
    this.name = 'Vincent Diamond'; 
    this.nim = '00000027047';
   }

  ngOnInit() {
  }

}
