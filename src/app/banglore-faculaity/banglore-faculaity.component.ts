import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-banglore-faculaity',
  templateUrl: './banglore-faculaity.component.html',
  styleUrls: ['./banglore-faculaity.component.css']
})
export class BangloreFaculaityComponent implements OnInit {

  facualitydetails:any;
  constructor(data:DataService) { 
    this.facualitydetails = data.facalityData();
  }

  ngOnInit(): void {
  }

}
