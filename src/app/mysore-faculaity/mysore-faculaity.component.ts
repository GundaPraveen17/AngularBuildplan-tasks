import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-mysore-faculaity',
  templateUrl: './mysore-faculaity.component.html',
  styleUrls: ['./mysore-faculaity.component.css']
})
export class MysoreFaculaityComponent implements OnInit {
  facualitydetails:any;
  constructor(data:DataService) { 
    this.facualitydetails = data.facalityData();
  }
  

  ngOnInit(): void {
  }

}
